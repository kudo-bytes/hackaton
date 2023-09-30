import { Component } from '@angular/core';
import { VideosService } from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentKeywords: string[] = [];
  
  constructor(
    private videoService: VideosService,
  ) {}

  proceedToVideos(keywords: string[]) {
    this.currentKeywords = keywords;
    console.log(keywords);
  }
}
// I am the student, I have just finished school. I am looking for a university in Poland (only Poland) that I could join. Help me to decide which polish university and the field of study is best for me. Ask me a question that I could answer yes or no. Limit the characters to 100. "