// src/app/services/market-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MarketDataService {
  private apiUrl = 'https://api.yourdomain.com/market-data'; // Placeholder for the actual API URL

  constructor(private http: HttpClient) {}

  getMarketData(projectIdentifier: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${projectIdentifier}`);
  }
}