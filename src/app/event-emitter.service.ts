import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  // Declaring object to emit event
  dataString = new EventEmitter();

  constructor() { }

  // Emits event containing the data
  emitEvent(data: any) {
    this.dataString.emit(data);
  }
}
