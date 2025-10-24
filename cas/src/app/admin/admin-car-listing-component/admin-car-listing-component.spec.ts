import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarListingComponent } from './admin-car-listing-component';

describe('AdminCarListingComponent', () => {
  let component: AdminCarListingComponent;
  let fixture: ComponentFixture<AdminCarListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCarListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
