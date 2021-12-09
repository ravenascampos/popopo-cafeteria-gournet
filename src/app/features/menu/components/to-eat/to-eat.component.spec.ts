import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToEatComponent } from './to-eat.component';

describe('ToEatComponent', () => {
  let component: ToEatComponent;
  let fixture: ComponentFixture<ToEatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToEatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToEatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
