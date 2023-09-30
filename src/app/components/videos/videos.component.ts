import { Renderer2, EventEmitter, Output, Component, Input, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, AfterViewInit {
  videos = this.videoService.getVideos();
  filteredVideos: any[] = [];
  isLoading = false;
  selectedKeywords: string[] = [];
  count = 0;

  @Input() keywords!: string[];
  @Output() triggerEvaluation = new EventEmitter<string[]>();
  @ViewChildren('videoElement') videoRefs!: QueryList<ElementRef>;

  constructor(
    private videoService: VideosService,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.filterVideos(this.keywords);
    this.renderer.listen('document', 'keydown', this.handleKeyboardEvent.bind(this));
  }

  ngAfterViewInit(): void {}

  filterVideos(keywords: string[]) {
    this.filteredVideos = this.videos.filter(video => 
      video.keywords.some(keyword => keywords.includes(keyword))
    );
  }

  onSwipe(event: CdkDragEnd, keywords: string[]) {
    this.count++;
    const xDifference = event.distance.x;
    const element = event.source.element.nativeElement;
  
    if (xDifference > 0) {
      this.selectedKeywords = [...this.selectedKeywords, ...keywords];
    }
    this.renderer.addClass(element, 'fade-out');

    if (this.filteredVideos.length === this.count) {
      this.triggerEvaluation.emit(this.selectedKeywords);
    }
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    const keywords = this.getCurrentVideoData().keywords;

    switch(event.key) {
      case 'ArrowLeft':
        this.swipeLeft(keywords);
        break;
      case 'ArrowRight':
        this.swipeRight(keywords);
        break;
      default:
        break;
    }
  }

  getCurrentVideoData(): { element: HTMLElement, keywords: string[] } {
    for (let i = this.videoRefs.length - 1; i >= 0; i--) {
      const videoElem: HTMLElement = this.videoRefs.toArray()[i].nativeElement;
      if (!videoElem.classList.contains('fade-out')) {
        return { element: videoElem, keywords: this.filteredVideos[i].keywords };
      }
    }
    throw new Error('No videos found.');
  }

  swipe(direction: 'left' | 'right', keywords: string[]) {
    const { element } = this.getCurrentVideoData();
    const translationTarget = direction === 'left' ? -100 : 100;
    this.animateSwipe(element, translationTarget, () => {
      this.completeSwipe(translationTarget, element, keywords);
    });
  }

  swipeLeft(keywords: string[]) {
    this.swipe('left', keywords);
  }

  swipeRight(keywords: string[]) {
    this.swipe('right', keywords);
  }

  animateSwipe(element: HTMLElement, translationTarget: number, onComplete: () => void) {
    let position = 0;
    const animate = () => {
      position += translationTarget < 0 ? -10 : 10;
      this.renderer.setStyle(element, 'transform', `translateX(${position}px)`);
      if ((translationTarget < 0 && position > translationTarget) || (translationTarget > 0 && position < translationTarget)) {
        requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };
    requestAnimationFrame(animate);
  }

  completeSwipe(direction: number, element: HTMLElement, keywords: string[]) {
    const fakeEvent: CdkDragEnd = {
      source: {
        element: {
          nativeElement: element
        }
      },
      distance: {
        x: direction,
        y: 0
      }
    } as any;
    this.onSwipe(fakeEvent, keywords);
  }
}
