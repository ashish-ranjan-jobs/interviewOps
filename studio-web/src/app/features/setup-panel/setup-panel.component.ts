import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionStateService } from '../../services/session-state.service';
import { StudioApiService } from '../../services/studio-api.service';
import { EthicsNoticeComponent } from '../../shared/ethics-notice/ethics-notice.component';
import { Track, Mode, Provider, CandidateResume } from '../../core/models/studio.models';

const BLOCKED_MODES = [
  'live interview',
  'stealth',
  'overlay',
  'hidden',
  'real-time answer',
  'cheat',
  'screen share bypass',
];

@Component({
  selector: 'app-setup-panel',
  standalone: true,
  imports: [EthicsNoticeComponent, FormsModule],
  template: `
    <div class="setup">
      <div class="setup-inner">
        <div class="hero-header">
          <div class="hero-badge">AI Backend Mock Interview Studio</div>
          <h1 class="setup-title">Backend & Distributed Systems Studio</h1>
          <p class="setup-subtitle">
            Calibrated with Ashish Ranjan's 10 Production Resumes &bull; Powered by Google Gemini
          </p>
        </div>

        <!-- ── Candidate Resume Selector (10 Tailored Resumes) ── -->
        <section class="setup-section resume-section">
          <div class="section-header">
            <div>
              <h2 class="section-label">Candidate Resume (Ashish Ranjan)</h2>
              <span class="section-hint">Select a resume track to ground Gemini in your Airtel & Dolcera experience</span>
            </div>
            <div class="category-tabs">
              <button
                type="button"
                class="cat-tab"
                [class.active]="categoryFilter === 'All'"
                (click)="categoryFilter = 'All'"
              >
                All ({{ resumes.length }})
              </button>
              <button
                type="button"
                class="cat-tab"
                [class.active]="categoryFilter === 'Java'"
                (click)="categoryFilter = 'Java'"
              >
                ☕ Java (4)
              </button>
              <button
                type="button"
                class="cat-tab"
                [class.active]="categoryFilter === 'Python & AI'"
                (click)="categoryFilter = 'Python & AI'"
              >
                🐍 Python & AI (6)
              </button>
            </div>
          </div>

          <div class="resume-scroll">
            <div class="resume-grid">
              @for (resume of filteredResumes(); track resume.id) {
                <div
                  class="resume-card"
                  [class.selected]="selectedResumeId === resume.id"
                  (click)="onSelectResume(resume)"
                  role="button"
                  tabindex="0"
                >
                  <div class="resume-card-header">
                    <span
                      class="resume-badge"
                      [class.badge-java]="resume.category === 'Java'"
                      [class.badge-python]="resume.category === 'Python & AI'"
                    >
                      {{ resume.category }}
                    </span>
                    @if (selectedResumeId === resume.id) {
                      <span class="active-indicator">✓ Selected</span>
                    }
                  </div>
                  <h3 class="resume-role-title">{{ resume.role }}</h3>
                  <div class="resume-spec-title">{{ resume.specialization }}</div>
                  <p class="resume-summary">{{ resume.summary }}</p>
                  <div class="resume-metrics-row">
                    @for (metric of resume.metrics.slice(0, 3); track metric) {
                      <span class="metric-tag">{{ metric }}</span>
                    }
                  </div>
                  <div class="resume-card-footer">
                    <span class="track-tag">🎯 Track: {{ resume.targetTrack }}</span>
                  </div>
                </div>
              }
            </div>
          </div>

          @if (activeResume) {
            <div class="active-resume-banner">
              <div class="banner-icon">🚀</div>
              <div class="banner-body">
                <strong>Active Context Loaded:</strong> {{ activeResume.role }} ({{ activeResume.specialization }})
                <div class="banner-details">
                  Target Track: <code>{{ activeResume.targetTrack }}</code> &bull; Key Metrics: {{ activeResume.metrics.join(' • ') }}
                </div>
              </div>
            </div>
          }
        </section>

        <!-- ── Track ── -->
        <section class="setup-section">
          <div class="section-header">
            <h2 class="section-label">Target Role Track</h2>
            <span class="track-count">{{ filteredTracks().length }} / {{ tracks.length }}</span>
          </div>
          <div class="track-search-wrap">
            <span class="track-search-icon">🔍</span>
            <input
              class="track-search"
              type="text"
              placeholder="Filter roles… e.g. java, python, distributed, microservices"
              [(ngModel)]="trackFilter"
            />
            @if (trackFilter) {
              <button class="track-search-clear" (click)="trackFilter = ''" title="Clear">✕</button>
            }
          </div>
          <div class="card-scroll">
            <div class="card-grid">
              @for (track of filteredTracks(); track track.id) {
                <button
                  class="option-card"
                  [class.selected]="sessionState.selectedTrack() === track.id"
                  (click)="sessionState.selectedTrack.set(track.id)"
                >
                  <span class="card-icon">{{ track.icon }}</span>
                  <span class="card-name">{{ track.name }}</span>
                </button>
              }
              @if (filteredTracks().length === 0) {
                <p class="track-empty">No tracks match "{{ trackFilter }}"</p>
              }
            </div>
          </div>
        </section>

        <!-- ── Mode ── -->
        <section class="setup-section">
          <div class="section-header">
            <h2 class="section-label">Interview Mode</h2>
            <span class="track-count">{{ filteredModes().length }} / {{ modes.length }}</span>
          </div>
          <div class="track-search-wrap">
            <span class="track-search-icon">🔍</span>
            <input
              class="track-search"
              type="text"
              placeholder="Filter modes… e.g. system design, backend architecture, concurrency"
              [(ngModel)]="modeFilter"
            />
            @if (modeFilter) {
              <button class="track-search-clear" (click)="modeFilter = ''" title="Clear">✕</button>
            }
          </div>
          <div class="card-scroll">
            <div class="card-grid">
              @for (mode of filteredModes(); track mode.id) {
                <button
                  class="option-card"
                  [class.selected]="sessionState.selectedMode() === mode.id"
                  (click)="selectMode(mode.id)"
                >
                  <span class="card-icon">{{ mode.icon }}</span>
                  <span class="card-name">{{ mode.name }}</span>
                </button>
              }
              @if (filteredModes().length === 0) {
                <p class="track-empty">No modes match "{{ modeFilter }}"</p>
              }
            </div>
          </div>
        </section>

        <!-- ── Provider ── -->
        <section class="setup-section">
          <h2 class="section-label">AI Provider</h2>
          <div class="provider-scroll">
            <div class="provider-grid">
              @for (provider of providers; track provider.id) {
                <button
                  class="provider-card"
                  [class.selected]="sessionState.selectedProvider() === provider.id"
                  (click)="selectProvider(provider)"
                >
                  <div class="provider-top">
                    <span class="provider-icon">{{ provider.icon }}</span>
                    @if (provider.badge) {
                      <span class="provider-badge" [class.badge-free]="provider.badge === 'Free' || provider.badge === 'Local'">
                        {{ provider.badge }}
                      </span>
                    }
                  </div>
                  <span class="provider-name">{{ provider.name }}</span>
                  <span class="provider-desc">{{ provider.description }}</span>
                  @if (provider.requiresKey) {
                    <span class="key-tag">🔑 Key required</span>
                  } @else {
                    <span class="key-tag free-tag">✓ No key needed</span>
                  }
                </button>
              }
            </div>
          </div>

          <!-- ── Provider detail panel ── -->
          @if (activeProvider()) {
            <div class="provider-detail" [class.detail-visible]="activeProvider() !== null">
              <!-- Model selector -->
              @if (activeProvider()!.models.length) {
                <div class="detail-row">
                  <label class="detail-label">Model</label>
                  <div class="model-grid">
                    @for (model of activeProvider()!.models; track model.id) {
                      <button
                        class="model-btn"
                        [class.selected]="sessionState.selectedModel() === model.id"
                        (click)="sessionState.selectedModel.set(model.id)"
                      >
                        {{ model.name }}
                        @if (model.recommended) {
                          <span class="model-rec">★ Recommended</span>
                        }
                      </button>
                    }
                  </div>
                </div>
              }

              <!-- Setup instructions (only for providers that need setup) -->
              @if (activeProvider()!.setupSteps.length > 0) {
                <div class="detail-row">
                  <button class="setup-toggle" (click)="showSetup.set(!showSetup())">
                    <span class="setup-toggle-icon">{{ showSetup() ? '▾' : '▸' }}</span>
                    @if (activeProvider()!.requiresKey) {
                      How to get your <strong>{{ activeProvider()!.keyEnvVar }}</strong>
                    } @else {
                      How to set up <strong>{{ activeProvider()!.name }}</strong>
                    }
                  </button>

                  @if (showSetup()) {
                    <div class="setup-instructions">
                      <ol class="setup-steps">
                        @for (step of activeProvider()!.setupSteps; track $index) {
                          <li class="setup-step">{{ step }}</li>
                        }
                      </ol>
                      @if (activeProvider()!.docsUrl) {
                        <a
                          class="docs-link"
                          [href]="activeProvider()!.docsUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open {{ activeProvider()!.name }} console →
                        </a>
                      }
                    </div>
                  }
                </div>
              }

              <!-- Ollama: show local server status hint -->
              @if (activeProvider()!.id === 'ollama') {
                <div class="ollama-hint">
                  <span class="hint-dot"></span>
                  Ollama connects to <code>localhost:11434</code> — make sure it's running before starting.
                </div>
              }
            </div>
          }
        </section>

        <app-ethics-notice />

        @if (error) {
          <div class="error-msg">{{ error }}</div>
        }

        <button
          class="start-btn"
          [disabled]="!canStart() || sessionState.isLoading()"
          (click)="start()"
        >
          @if (sessionState.isLoading()) {
            Starting Mock Interview...
          } @else {
            Start Mock Interview
          }
        </button>
      </div>
    </div>
  `,
  styleUrl: './setup-panel.component.css',
})
export class SetupPanelComponent implements OnInit {
  resumes: CandidateResume[] = [];
  selectedResumeId = '';
  categoryFilter: 'All' | 'Java' | 'Python & AI' = 'All';
  activeResume: CandidateResume | null = null;

  tracks: Track[] = [];
  modes: Mode[] = [];
  providers: Provider[] = [];
  error: string | null = null;
  trackFilter = '';
  modeFilter = '';

  readonly activeProvider = signal<Provider | null>(null);
  readonly showSetup = signal(false);

  filteredResumes(): CandidateResume[] {
    if (this.categoryFilter === 'All') {
      return this.resumes;
    }
    return this.resumes.filter((r) => r.category === this.categoryFilter);
  }

  filteredModes(): Mode[] {
    const q = this.modeFilter.trim().toLowerCase();
    if (!q) return this.modes;
    return this.modes.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q)
    );
  }

  filteredTracks(): Track[] {
    const q = this.trackFilter.trim().toLowerCase();
    if (!q) return this.tracks;
    return this.tracks.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }

  constructor(
    public sessionState: SessionStateService,
    private api: StudioApiService
  ) {}

  ngOnInit(): void {
    // 1. Fetch 10 Resumes
    this.api.getResumes().subscribe({
      next: (resumes) => {
        this.resumes = resumes;
        if (resumes.length > 0 && !this.selectedResumeId) {
          this.onSelectResume(resumes[0]);
        }
      },
      error: (err) => console.error('Failed to load resumes:', err),
    });

    // 2. Fetch Tracks
    this.api.getTracks().subscribe((t) => {
      this.tracks = t;
      if (!this.sessionState.selectedTrack() && t.length > 0) {
        const defaultTrack = t.find((x) => x.id === 'backend-developer') ?? t[0];
        this.sessionState.selectedTrack.set(defaultTrack.id);
      }
    });

    // 3. Fetch Modes
    this.api.getModes().subscribe((m) => {
      this.modes = m;
      if (!this.sessionState.selectedMode() && m.length > 0) {
        const defaultMode = m.find((x) => x.id === 'system-design') ?? m[0];
        this.sessionState.selectedMode.set(defaultMode.id);
      }
    });

    // 4. Fetch Providers (default to Gemini)
    this.api.getProviders().subscribe((p) => {
      this.providers = p;
      const defaultProvider =
        p.find((x) => x.id === 'gemini') ?? p.find((x) => x.id === 'mock') ?? p[0];
      if (defaultProvider) {
        this.selectProvider(defaultProvider);
      }
    });
  }

  onSelectResume(resume: CandidateResume): void {
    this.selectedResumeId = resume.id;
    this.activeResume = resume;
    this.sessionState.selectedTrack.set(resume.targetTrack);

    // Auto-select first recommended mode if current mode isn't in recommended modes
    if (resume.recommendedModes && resume.recommendedModes.length > 0) {
      if (!resume.recommendedModes.includes(this.sessionState.selectedMode())) {
        this.sessionState.selectedMode.set(resume.recommendedModes[0]);
      }
    }

    // Call backend to select resume and sync candidate profile
    this.api.selectResume(resume.id).subscribe({
      next: (res) => {
        // Updated profile on backend successfully
      },
      error: (err) => console.error('Failed to select resume:', err),
    });
  }

  selectProvider(provider: Provider): void {
    this.sessionState.selectedProvider.set(provider.id);
    this.activeProvider.set(provider);
    this.showSetup.set(false);

    // Auto-select recommended model (or first model)
    const recommended = provider.models?.find((m) => m.recommended) ?? provider.models?.[0];
    this.sessionState.selectedModel.set(recommended?.id ?? '');
  }

  selectMode(modeId: string): void {
    const isBlocked = BLOCKED_MODES.some((b) =>
      modeId.toLowerCase().includes(b)
    );
    if (isBlocked) {
      this.error =
        'This mode is blocked for ethical reasons. InterviewOps is for practice only.';
      return;
    }
    this.error = null;
    this.sessionState.selectedMode.set(modeId);
  }

  canStart(): boolean {
    return (
      this.sessionState.selectedTrack() !== '' &&
      this.sessionState.selectedMode() !== '' &&
      this.sessionState.selectedProvider() !== ''
    );
  }

  start(): void {
    this.sessionState.createSession(
      this.sessionState.selectedTrack(),
      this.sessionState.selectedMode(),
      this.sessionState.selectedProvider(),
      this.sessionState.selectedModel() || undefined
    );
  }
}
