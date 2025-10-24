import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCar } from './search-car';

describe('SearchCar', () => {
  let component: SearchCar;
  let fixture: ComponentFixture<SearchCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
