import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderMyBidsComponent } from './bidder-my-bids-component';

describe('BidderMyBidsComponent', () => {
  let component: BidderMyBidsComponent;
  let fixture: ComponentFixture<BidderMyBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidderMyBidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidderMyBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
