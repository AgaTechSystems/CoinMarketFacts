// src/app/shared/score-display/score-display.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent {
  @Input() label: string; // The label for the score (e.g., "Trust Score")
  @Input() score: number; // The numerical score to display

  // For a more advanced UI, you could input colors or other parameters
}