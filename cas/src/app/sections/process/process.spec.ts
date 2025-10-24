import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Process } from './process';

describe('Process', () => {
  let component: Process;
  let fixture: ComponentFixture<Process>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Process]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Process);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
