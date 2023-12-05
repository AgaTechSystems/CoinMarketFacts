// src/app/services/project.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectApiUrl = 'https://api.yourservice.com';

  constructor(private http: HttpClient) {}

  getProjectDetails(projectId: string): Observable<any> {
    return this.http.get(`${this.projectApiUrl}/projects/${projectId}`);
  }

  // Add methods for other API endpoints
}
