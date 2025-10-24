import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preloader } from './preloader';

describe('Preloader', () => {
  let component: Preloader;
  let fixture: ComponentFixture<Preloader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preloader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preloader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
