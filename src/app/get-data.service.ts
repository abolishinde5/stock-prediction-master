import { Injectable } from '@angular/core';
import { STOCK_LIST } from './stockList';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  // Returns stock lists
  getStockListData() {
    const list = STOCK_LIST;
    return list;
  }
}
