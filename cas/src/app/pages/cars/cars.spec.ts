import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cars } from './cars';

describe('Cars', () => {
  let component: Cars;
  let fixture: ComponentFixture<Cars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
