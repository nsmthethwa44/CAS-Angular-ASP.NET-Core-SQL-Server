import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightNews } from './insight-news';

describe('InsightNews', () => {
  let component: InsightNews;
  let fixture: ComponentFixture<InsightNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
