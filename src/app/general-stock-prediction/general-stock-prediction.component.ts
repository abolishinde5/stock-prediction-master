import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-general-stock-prediction',
  templateUrl: './general-stock-prediction.component.html',
  styleUrls: ['./general-stock-prediction.component.css']
})
export class GeneralStockPredictionComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService ) {}

  ngOnInit() {
    // Emitting event to change background and navbar title when new prediction component is loaded.
    this.eventEmitterService.emitEvent({
      title: 'General Stock Prediction',
      pageIcon: '../assets/shared-icons/Stock-Logo.svg',
      backgroundUrl: '../assets/general-stock-images/general_stock.png'
    });
  }

}
