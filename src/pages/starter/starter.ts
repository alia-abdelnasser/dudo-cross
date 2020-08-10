import { Component, ViewChild } from '@angular/core';
import { App, ViewController, Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html'
})
export class StarterPage {
  @ViewChild(Slides) slides: Slides;
  index = 0;
  period: number;
  cycle: number;
  pms: number;
  last: Date;
  action: number = 1;
  delivery: Date;
  week: number;
  qadaa: number = 1;
  qadaaDays: number = 0;


  constructor(public viewCtrl: ViewController,
      public appCtrl: App) {
  }

  ionViewDidLoad() {
    //this.slides.freeMode = true;
    this.slides.lockSwipes(true);
  }

  slideChanged(){
    this.slides.lockSwipes(true);
    //this.slides.isBeginning();
    //this.slides.isEnd();
    this.index = this.slides.getActiveIndex();
    //this.slides.length();
    //lockSwipeToNext(shouldLockSwipeToNext)
    //lockSwipeToPrev(shouldLockSwipeToPrev)
    //slideNext(speed, runCallbacks)
    //slidePrev(speed, runCallbacks)
    //slideTo(index, speed, runCallbacks)
  }

  goToNextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
  }

  goToPrevSlide(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
  }

  goToHome(){
   let profile = {
      period: this.period,
      cycle: this.cycle,
      pms: this.pms,
      last: this.last,
      action: this.action,
      delivery: this.delivery,
      week: this.week,
      qadaa: this.qadaa,
      qadaaDays: this.qadaaDays
    };
    console.log(profile);
    //this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(TabsPage);
  }
}