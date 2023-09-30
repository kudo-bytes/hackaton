import { Component, Input, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos = this.videoService.getVideos();
  filteredVideos: any[] = [];
  isLoading = false;

  @Input('keywords') keywords!: string[];

  constructor(
    private videoService: VideosService,
  ) {}

  ngOnInit() {
      this.filterVideos(this.keywords);
  }

  filterVideos(keywords: string[]) {
    this.filteredVideos = this.videos.filter((video: any) => {
      return video.keywords.some((keyword: string) => keywords.includes(keyword));
    });
    console.log(this.filteredVideos);
  }

  answer(answer: string) {

  }

}
