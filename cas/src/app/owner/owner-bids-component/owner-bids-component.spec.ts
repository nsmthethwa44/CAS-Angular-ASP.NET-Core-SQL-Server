import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBidsComponent } from './owner-bids-component';

describe('OwnerBidsComponent', () => {
  let component: OwnerBidsComponent;
  let fixture: ComponentFixture<OwnerBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerBidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
