import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderDashboardComponent } from './bidder-dashboard-component';

describe('BidderDashboardComponent', () => {
  let component: BidderDashboardComponent;
  let fixture: ComponentFixture<BidderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidderDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
