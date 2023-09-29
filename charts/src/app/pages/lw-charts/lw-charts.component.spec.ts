import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LwChartsComponent } from './lw-charts.component';

describe('LwChartsComponent', () => {
  let component: LwChartsComponent;
  let fixture: ComponentFixture<LwChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LwChartsComponent]
    });
    fixture = TestBed.createComponent(LwChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
