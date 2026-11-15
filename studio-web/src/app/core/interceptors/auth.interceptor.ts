import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Ensures HTTP Basic credentials and authorization context
 * are reliably forwarded with every request to the API.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    withCredentials: true,
  });
  return next(cloned);
};
