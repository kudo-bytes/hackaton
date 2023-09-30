import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos = [
    {
      title: 'programmer',
      url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGl4dGR5ZTBmNWQycjE5M3VjanVqdWR1eTl1MHZiejRibmU4NXBpNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vzO0Vc8b2VBLi/giphy.gif',
      keywords: ['Problem-solving', 'Detail-oriented', 'Technical proficiency', 'Continuous learning'],
    },
    {
      title: 'painter',
      url: 'https://giphy.com/gifs/endlesspoetry-alejandro-jodorowsky-endless-poetry-xT39D7GQo1m3LatZyU',
      keywords: ['Artistic talent', 'Cultural awareness', 'Social interaction', 'Detail-oriented'],
    },
    {
      title: 'salesman',
      url: 'https://giphy.com/gifs/ryanserhant-ryan-serhant-3XBK3CzTN9A1qnzrvR',
      keywords: ['Sales aptitude', 'Public speaking', 'Negotiation', 'Communication'],
    },
    {
      title: 'plumber',
      url: 'https://giphy.com/gifs/season-3-the-simpsons-3x16-xT5LMVdV4uMer9S0RG',
      keywords: ['Hands-on tasks', 'Physical activity', 'Helping others', 'Problem-solving'],
    },
  ]

  constructor() { }

  getVideos() {
    return this.videos;
  }

}
