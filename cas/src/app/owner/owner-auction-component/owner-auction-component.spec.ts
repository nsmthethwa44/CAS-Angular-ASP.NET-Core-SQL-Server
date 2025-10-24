import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAuctionComponent } from './owner-auction-component';

describe('OwnerAuctionComponent', () => {
  let component: OwnerAuctionComponent;
  let fixture: ComponentFixture<OwnerAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerAuctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
