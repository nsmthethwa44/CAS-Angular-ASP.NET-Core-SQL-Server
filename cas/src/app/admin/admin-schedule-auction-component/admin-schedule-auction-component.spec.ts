import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduleAuctionComponent } from './admin-schedule-auction-component';

describe('AdminScheduleAuctionComponent', () => {
  let component: AdminScheduleAuctionComponent;
  let fixture: ComponentFixture<AdminScheduleAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminScheduleAuctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminScheduleAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
