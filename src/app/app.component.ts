import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Dynamic content to be shown on navbar and background for each view
  title = 'Stock Prediction Application';
  pageIcon = '../assets/shared-icons/Stock-Logo.svg';
  backgroundUrl = '../assets/general-stock-images/general_stock.png';
  backgroundUrlFormatted = 'url(' + this.backgroundUrl + ')';

  constructor(private eventEmitterService: EventEmitterService) {
  }

  ngOnInit() {
    // Changes background and navbar details for each kind of prediction
    this.eventEmitterService.dataString.subscribe(data => {
      this.title = data.title;
      this.pageIcon = data.pageIcon;
      this.backgroundUrl = data.backgroundUrl;
    });
  }

  // Returns background url to be shown for each view.
  getBackgroundUrl() {
    return this.backgroundUrlFormatted;
  }

}
