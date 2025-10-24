import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageAuction } from './admin-manage-auction';

describe('AdminManageAuction', () => {
  let component: AdminManageAuction;
  let fixture: ComponentFixture<AdminManageAuction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageAuction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageAuction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
