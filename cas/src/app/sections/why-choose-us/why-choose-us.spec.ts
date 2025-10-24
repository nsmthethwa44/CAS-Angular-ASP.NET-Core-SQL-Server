import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseUs } from './why-choose-us';

describe('WhyChooseUs', () => {
  let component: WhyChooseUs;
  let fixture: ComponentFixture<WhyChooseUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChooseUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
