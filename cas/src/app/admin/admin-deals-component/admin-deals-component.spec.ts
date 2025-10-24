import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDealsComponent } from './admin-deals-component';

describe('AdminDealsComponent', () => {
  let component: AdminDealsComponent;
  let fixture: ComponentFixture<AdminDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
