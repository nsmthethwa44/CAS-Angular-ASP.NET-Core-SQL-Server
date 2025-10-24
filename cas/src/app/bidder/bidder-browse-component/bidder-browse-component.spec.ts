import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderBrowseComponent } from './bidder-browse-component';

describe('BidderBrowseComponent', () => {
  let component: BidderBrowseComponent;
  let fixture: ComponentFixture<BidderBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidderBrowseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidderBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
