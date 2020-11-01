import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmanComponent } from './depatman.component';

describe('DepatmanComponent', () => {
  let component: DepatmanComponent;
  let fixture: ComponentFixture<DepatmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepatmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
