import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { GeneralStockPredictionComponent } from './general-stock-prediction/general-stock-prediction.component';


const routes: Routes = [
  { path: '', redirectTo: 'stock-list', pathMatch: 'full' },
  { path: 'stock-list', component: StockListComponent },
  { path: 'general-stock-prediction', component: GeneralStockPredictionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ROUTING_COMPONENTS = [
  StockListComponent,
  GeneralStockPredictionComponent
];
