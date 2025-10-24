import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copyright } from './copyright';

describe('Copyright', () => {
  let component: Copyright;
  let fixture: ComponentFixture<Copyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copyright]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Copyright);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
