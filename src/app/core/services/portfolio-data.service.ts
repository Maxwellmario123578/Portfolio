import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { Certification, Project, SkillCategory, TimelineItem, Volunteer } from '../models';
import { LanguageService } from './language.service';

interface PortfolioDataFile {
  projects: { fr: Project[]; en: Project[] };
  skills: { fr: SkillCategory[]; en: SkillCategory[] };
  education: { fr: TimelineItem[]; en: TimelineItem[] };
  certifications: { fr: Certification[]; en: Certification[] };
  volunteers: { fr: Volunteer[]; en: Volunteer[] };
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private http = inject(HttpClient);
  private languageService = inject(LanguageService);

  private data$ = this.http.get<PortfolioDataFile>('/portfolio-data.json').pipe(
    shareReplay(1),
    catchError(() => of(this.getFallbackData()))
  );

  private getLang(): 'fr' | 'en' {
    return this.languageService.currentLanguage();
  }

  private sortProjects(projects: Project[]): Project[] {
    return [...projects].sort((a, b) => {
      if (a.isHackathon && !b.isHackathon) return -1;
      if (!a.isHackathon && b.isHackathon) return 1;
      if (a.status === 'terminé' && b.status !== 'terminé') return -1;
      if (a.status !== 'terminé' && b.status === 'terminé') return 1;
      return 0;
    });
  }

  getProjects(): Observable<Project[]> {
    return this.data$.pipe(
      map((data) => this.sortProjects(data.projects[this.getLang()]))
    );
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(map((projects) => projects.find((p) => p.id === id)));
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.data$.pipe(map((data) => data.skills[this.getLang()]));
  }

  getTimeline(): Observable<TimelineItem[]> {
    return this.data$.pipe(map((data) => data.education[this.getLang()]));
  }

  getCertifications(): Observable<Certification[]> {
    return this.data$.pipe(map((data) => data.certifications[this.getLang()]));
  }

  getVolunteers(): Observable<Volunteer[]> {
    return this.data$.pipe(map((data) => data.volunteers[this.getLang()]));
  }

  /** Données de secours si le JSON n'est pas accessible */
  private getFallbackData(): PortfolioDataFile {
    return { projects: { fr: [], en: [] }, skills: { fr: [], en: [] }, education: { fr: [], en: [] }, certifications: { fr: [], en: [] }, volunteers: { fr: [], en: [] } };
  }
}
