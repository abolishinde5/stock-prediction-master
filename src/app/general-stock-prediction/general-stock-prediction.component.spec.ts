import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStockPredictionComponent } from './general-stock-prediction.component';

describe('GeneralStockPredictionComponent', () => {
  let component: GeneralStockPredictionComponent;
  let fixture: ComponentFixture<GeneralStockPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStockPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStockPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
