import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2chartsComponent } from './ng2charts.component';

describe('Ng2chartsComponent', () => {
  let component: Ng2chartsComponent;
  let fixture: ComponentFixture<Ng2chartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng2chartsComponent]
    });
    fixture = TestBed.createComponent(Ng2chartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
