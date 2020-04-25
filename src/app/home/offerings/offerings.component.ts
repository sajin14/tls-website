import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})

export class OfferingsComponent implements OnInit {

  public offeringList = [{
    title: 'translation',
    description: 'We offer world class translation services with the support of 1000+ professional translators in various languages.'
  },
  {
    title: 'transcription',
    description: 'We offer quality transcription services at afforable costs suits your budget.'
  },
  {
    title: 'subtitling',
    description: 'We offer movie/video subtitling at utmost quality using subtitling professionals in all languages'
  }];

  constructor() {

  }

  gotoDetails(title) {

  }



  ngOnInit() {

  }
}
