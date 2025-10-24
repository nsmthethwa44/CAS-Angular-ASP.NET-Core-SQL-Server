import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderOverviewComponent } from './bidder-overview-component';

describe('BidderOverviewComponent', () => {
  let component: BidderOverviewComponent;
  let fixture: ComponentFixture<BidderOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidderOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
