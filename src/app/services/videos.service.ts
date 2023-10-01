import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos = [
    {
      id: 1,
      title: 'programmer',
      url: 'assets/vidYes.mp4',
      keywords: ['Problem-solving', 'Detail-oriented', 'Technical proficiency', 'Continuous learning'],
    },
    {
      id: 2,
      title: 'painter',
      url: 'assets/vidNo.mp4',
      keywords: ['Artistic talent', 'Cultural awareness', 'Social interaction', 'Detail-oriented'],
    },
  ]

  constructor() { }

  getVideos() {
    return this.videos;
  }

}
