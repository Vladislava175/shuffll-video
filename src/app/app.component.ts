import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  play: boolean = false;
  todo: string[] = [
    'https://content.shuffll.com/files/background-music/1.mp4',
    'https://content.shuffll.com/files/background-music/1.mp4',
    'https://content.shuffll.com/files/background-music/1.mp4',
  ];
  seconds: number[] = [];
  done: string[] = [];
  currentPlayingVideo!: HTMLVideoElement;
  videoIndex: number = 0;
  dateSeconds!: Date;

  startNextVideo(isNext: boolean = false) {
    !isNext && this.moveCoursor();
    setInterval(() => {
      this.moveCoursor();
    }, 1000);
    if (this.videoIndex <= this.done.length) {
      isNext && this.videoIndex++;
      let video = document.getElementById(this.videoIndex + '') as any;
      video && video.play();
    }
    if (this.videoIndex == this.done.length) {
      this.videoIndex = 0;
    }
  }
  moveCoursor() {
    let container = document.getElementById('ruler') as any;
    let childToScrollTo = document.getElementById('vertical') as any;
  }
  fromListToList(event: CdkDragDrop<string[]>, toTrack: boolean = true) {
    this.drop(event);
    let video = event.item.element.nativeElement.childNodes[0] as any;
    let length = toTrack
      ? video.duration + this.seconds.length
      : this.seconds.length - Math.round(video.duration);
    this.seconds = Array.from({ length: length }, (_, i) => i + 1);
  }
  private drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onPlayingVideo(event: any) {
    event.preventDefault();
    // play the first video that is chosen by the user
    if (this.currentPlayingVideo === undefined) {
      this.currentPlayingVideo = event.target;
      this.currentPlayingVideo.play();
    } else {
      // if the user plays a new video, pause the last
      // one and play the new one
      if (event.target !== this.currentPlayingVideo) {
        this.currentPlayingVideo.pause();
        this.currentPlayingVideo = event.target;
        this.currentPlayingVideo.play();
      }
    }
  }
}
