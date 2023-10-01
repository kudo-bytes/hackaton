import { Component } from '@angular/core';
import { VideosService } from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentKeywords: string[] = [];
  isEvaluation = false;
  finalKeywords: string[] = [];
  
  constructor() {}

  proceedToVideos(keywords: string[]) {
    this.currentKeywords = keywords;
    console.log(keywords);
  }

  proceedToEvaluation(keywords: string[]) {
    this.currentKeywords = [];
    this.isEvaluation = true;
    this.finalKeywords = keywords;
  }
}
