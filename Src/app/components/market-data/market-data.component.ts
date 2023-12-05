// src/app/components/market-data/market-data.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { MarketDataService } from '../../services/market-data.service';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {
  @Input() projectIdentifier: string;
  marketData: any;

  constructor(private marketDataService: MarketDataService) {}

  ngOnInit(): void {
    if (this.projectIdentifier) {
      this.marketDataService.getMarketData(this.projectIdentifier).subscribe(
        data => {
          this.marketData = data;
        },
        error => {
          // Handle errors here
        }
      );
    }
  }
}