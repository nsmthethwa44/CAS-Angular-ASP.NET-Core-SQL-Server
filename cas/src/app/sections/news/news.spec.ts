import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News } from './news';

describe('News', () => {
  let component: News;
  let fixture: ComponentFixture<News>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [News]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
