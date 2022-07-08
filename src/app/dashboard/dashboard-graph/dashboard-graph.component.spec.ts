import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGraphComponent } from './dashboard-graph.component';

describe('DashboardGraphComponent', () => {
  let component: DashboardGraphComponent;
  let fixture: ComponentFixture<DashboardGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
