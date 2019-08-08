import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  // Stores the stock list data
  stockList: any;

  constructor(private getDataService: GetDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Getting the stock list data using service
    this.stockList = this.getDataService.getStockListData();
  }

  // Routing to appropriate view
  showView(urlPath: string) {
    this.router.navigate([urlPath]);
  }
}
