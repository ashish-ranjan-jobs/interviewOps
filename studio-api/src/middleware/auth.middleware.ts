import type { Request, Response, NextFunction } from 'express';
import crypto from 'node:crypto';

// Configuration from environment with secure defaults
const EXPECTED_USER = process.env['STUDIO_AUTH_USER'] || 'ashish';
const EXPECTED_PASS = process.env['STUDIO_AUTH_PASSWORD'] || 'InterviewOps@2026!';
const EXPECTED_API_KEY =
  process.env['STUDIO_API_KEY'] ||
  '51c42b9f1368d0548c84a8ed7005f6186031d916882835d86714f471994539ee';
const GATEWAY_SECRET =
  process.env['INTERNAL_GATEWAY_SECRET'] ||
  '90fd1ae79cf3eebc539d35f509518f261efdb41615ef59a4e11b42688188082b';

/**
 * Constant-time string equality check to prevent timing attacks
 */
function safeCompare(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const bufA = Buffer.from(a, 'utf-8');
  const bufB = Buffer.from(b, 'utf-8');
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Strict authentication middleware for all API endpoints.
 * Supports:
 *  1. Internal Reverse Proxy Gateway Secret (Nginx verification)
 *  2. HTTP Basic Authentication (ashish:InterviewOps@2026!)
 *  3. Bearer Token (Authorization: Bearer <API_KEY>)
 *  4. API Key Header (X-API-Key: <API_KEY>)
 */
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  // 1. Verify Gateway Secret from Nginx proxy
  const gatewayHeader = req.headers['x-internal-gateway-secret'];
  if (
    gatewayHeader &&
    typeof gatewayHeader === 'string' &&
    safeCompare(gatewayHeader, GATEWAY_SECRET)
  ) {
    return next();
  }

  // 2. Verify X-API-Key header
  const apiKeyHeader = req.headers['x-api-key'];
  if (
    apiKeyHeader &&
    typeof apiKeyHeader === 'string' &&
    safeCompare(apiKeyHeader, EXPECTED_API_KEY)
  ) {
    return next();
  }

  // 3. Verify Authorization header (Bearer or Basic)
  const authHeader = req.headers['authorization'];
  if (authHeader && typeof authHeader === 'string') {
    // Bearer token
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7).trim();
      if (safeCompare(token, EXPECTED_API_KEY)) {
        return next();
      }
    }

    // Basic Auth
    if (authHeader.startsWith('Basic ')) {
      const base64 = authHeader.substring(6).trim();
      try {
        const decoded = Buffer.from(base64, 'base64').toString('utf-8');
        const colonIdx = decoded.indexOf(':');
        if (colonIdx > 0) {
          const user = decoded.substring(0, colonIdx);
          const pass = decoded.substring(colonIdx + 1);
          if (safeCompare(user, EXPECTED_USER) && safeCompare(pass, EXPECTED_PASS)) {
            return next();
          }
        }
      } catch {
        // Fall through to 401
      }
    }
  }

  // Unauthorized response
  res.status(401).json({
    error: 'Unauthorized',
    message: 'Access denied: High-security authentication is required for this API endpoint.',
    timestamp: new Date().toISOString(),
  });
}
