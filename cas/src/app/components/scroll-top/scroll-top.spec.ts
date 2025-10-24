import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTop } from './scroll-top';

describe('ScrollTop', () => {
  let component: ScrollTop;
  let fixture: ComponentFixture<ScrollTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
