import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderModalBidComponent } from './bidder-modal-bid-component';

describe('BidderModalBidComponent', () => {
  let component: BidderModalBidComponent;
  let fixture: ComponentFixture<BidderModalBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidderModalBidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidderModalBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
