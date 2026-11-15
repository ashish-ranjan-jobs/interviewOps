import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateProfile, CandidateResume } from '../../core/models/studio.models';
import { StudioApiService } from '../../services/studio-api.service';

@Component({
  selector: 'app-profile-panel',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="profile-page">
      <div class="profile-container">
        <div class="profile-header">
          <div class="profile-badge">Candidate Calibration</div>
          <h1 class="profile-title">Ashish Ranjan - Candidate Profile</h1>
          <p class="profile-subtitle">Load from your 10 production resumes or customize experience details for Gemini.</p>
          <div class="header-actions">
            <button class="back-btn" (click)="goBack()">← Back to Studio</button>
          </div>
        </div>

        <!-- ── 1-Click Load from 10 Resumes ── -->
        <section class="profile-section preset-section">
          <div class="preset-header">
            <h2 class="section-label">⚡ 1-Click Load from 10 Production Resumes</h2>
            <div class="preset-tabs">
              <button
                type="button"
                class="ptab"
                [class.active]="categoryFilter === 'All'"
                (click)="categoryFilter = 'All'"
              >
                All ({{ resumes.length }})
              </button>
              <button
                type="button"
                class="ptab"
                [class.active]="categoryFilter === 'Java'"
                (click)="categoryFilter = 'Java'"
              >
                Java (4)
              </button>
              <button
                type="button"
                class="ptab"
                [class.active]="categoryFilter === 'Python & AI'"
                (click)="categoryFilter = 'Python & AI'"
              >
                Python & AI (6)
              </button>
            </div>
          </div>

          <div class="preset-grid">
            @for (resume of filteredResumes(); track resume.id) {
              <button
                type="button"
                class="preset-card"
                [class.active]="selectedResumeId === resume.id"
                (click)="loadFromResume(resume)"
              >
                <div class="preset-card-top">
                  <span class="preset-badge" [class.badge-java]="resume.category === 'Java'" [class.badge-python]="resume.category === 'Python & AI'">
                    {{ resume.category }}
                  </span>
                  @if (selectedResumeId === resume.id) {
                    <span class="preset-active-label">✓ Active</span>
                  }
                </div>
                <div class="preset-role">{{ resume.role }}</div>
                <div class="preset-spec">{{ resume.specialization }}</div>
              </button>
            }
          </div>
        </section>

        <section class="profile-section">
          <h2 class="section-label">Resume / Experience (Parsed Text)</h2>
          <textarea
            class="text-area"
            [(ngModel)]="resumeText"
            placeholder="Paste your resume text here..."
            rows="10"
          ></textarea>
          <div class="char-count">{{ resumeText.length }} characters</div>
        </section>

        <section class="profile-section">
          <h2 class="section-label">Job Description (Target Role)</h2>
          <textarea
            class="text-area"
            [(ngModel)]="jobDescriptionText"
            placeholder="Paste the job description here..."
            rows="6"
          ></textarea>
          <div class="char-count">{{ jobDescriptionText.length }} characters</div>
        </section>

        <div class="form-row">
          <section class="profile-section half">
            <h2 class="section-label">Target Company</h2>
            <input class="text-input" [(ngModel)]="targetCompany" placeholder="e.g., Tier-1 Fintech / AI Labs / Airtel" />
          </section>
          <section class="profile-section half">
            <h2 class="section-label">Target Role</h2>
            <input class="text-input" [(ngModel)]="targetRole" placeholder="e.g., Senior Backend Engineer" />
          </section>
        </div>

        <div class="form-row">
          <section class="profile-section half">
            <h2 class="section-label">Seniority Level</h2>
            <select class="text-input" [(ngModel)]="seniorityLevel">
              <option value="">Select...</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-Level</option>
              <option value="senior">Senior (Default)</option>
              <option value="staff">Staff Engineer</option>
              <option value="principal">Principal Engineer</option>
            </select>
          </section>
          <section class="profile-section half">
            <h2 class="section-label">Interview Date</h2>
            <input class="text-input" type="date" [(ngModel)]="interviewDate" />
          </section>
        </div>

        <section class="profile-section">
          <h2 class="section-label">Focus Areas for Gemini</h2>
          <div class="focus-area-chips">
            @for (area of availableAreas; track area) {
              <button
                type="button"
                class="chip"
                [class.selected]="focusAreas.includes(area)"
                (click)="toggleFocusArea(area)"
              >{{ area }}</button>
            }
          </div>
        </section>

        @if (saveMessage()) {
          <div class="save-message" [class.error]="saveMessage()!.startsWith('Error')">{{ saveMessage() }}</div>
        }

        <div class="action-row">
          <button class="save-btn" (click)="save()">Save Profile</button>
          <button class="clear-btn" (click)="clearProfile()">Clear</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './profile-panel.component.css',
})
export class ProfilePanelComponent implements OnInit {
  resumes: CandidateResume[] = [];
  selectedResumeId = '';
  categoryFilter: 'All' | 'Java' | 'Python & AI' = 'All';

  resumeText = '';
  jobDescriptionText = '';
  targetCompany = '';
  targetRole = '';
  seniorityLevel = 'senior';
  interviewDate = '';
  focusAreas: string[] = [];
  saveMessage = signal<string | null>(null);

  availableAreas = [
    'System Design',
    'Distributed Systems',
    'High-Throughput (350+ TPS)',
    'Spring Boot 3 & Java 21',
    'FastAPI & AsyncIO',
    'Kafka & Event-Driven Sagas',
    'Redis Caching & Vector Search',
    'PostgreSQL Query Optimization',
    'GenAI & LangGraph Agents',
    'AWS EKS & Docker',
    'LeetCode (1,111+ solved)',
    'Behavioral (Airtel & Dolcera STAR)',
  ];

  constructor(
    private api: StudioApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1. Load active profile
    this.api.getProfile().subscribe({
      next: (profile) => this.loadFromProfile(profile),
    });

    // 2. Load 10 resumes for presets
    this.api.getResumes().subscribe({
      next: (resumes) => {
        this.resumes = resumes;
      },
      error: (err) => console.error('Failed to load resumes:', err),
    });
  }

  filteredResumes(): CandidateResume[] {
    if (this.categoryFilter === 'All') return this.resumes;
    return this.resumes.filter((r) => r.category === this.categoryFilter);
  }

  loadFromResume(resume: CandidateResume): void {
    this.selectedResumeId = resume.id;
    this.api.getResume(resume.id).subscribe({
      next: (fullResume) => {
        this.resumeText = fullResume.fullText ?? resume.summary;
        this.targetRole = resume.role;
        this.seniorityLevel = 'senior';
        this.focusAreas = resume.skills.slice(0, 8);
        this.targetCompany = 'Top-tier Tech / Fintech / AI Labs';

        // Save immediately
        this.save();
      },
      error: (err) => console.error('Failed to load full resume:', err),
    });
  }

  private loadFromProfile(profile: CandidateProfile): void {
    this.resumeText = profile.resumeText ?? '';
    this.jobDescriptionText = profile.jobDescriptionText ?? '';
    this.targetCompany = profile.targetCompany ?? '';
    this.targetRole = profile.targetRole ?? '';
    this.seniorityLevel = profile.seniorityLevel ?? 'senior';
    this.interviewDate = profile.interviewDate ?? '';
    this.focusAreas = profile.focusAreas ?? [];
  }

  toggleFocusArea(area: string): void {
    const idx = this.focusAreas.indexOf(area);
    if (idx >= 0) {
      this.focusAreas = this.focusAreas.filter((a) => a !== area);
    } else {
      this.focusAreas = [...this.focusAreas, area];
    }
  }

  save(): void {
    this.api
      .updateProfile({
        resumeText: this.resumeText || undefined,
        jobDescriptionText: this.jobDescriptionText || undefined,
        targetCompany: this.targetCompany || undefined,
        targetRole: this.targetRole || undefined,
        seniorityLevel: this.seniorityLevel || undefined,
        interviewDate: this.interviewDate || undefined,
        focusAreas: this.focusAreas,
      })
      .subscribe({
        next: () => this.saveMessage.set('Profile calibrated and saved successfully for Gemini.'),
        error: () => this.saveMessage.set('Error saving profile.'),
      });
  }

  clearProfile(): void {
    this.resumeText = '';
    this.jobDescriptionText = '';
    this.targetCompany = '';
    this.targetRole = '';
    this.seniorityLevel = '';
    this.interviewDate = '';
    this.focusAreas = [];
    this.save();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
