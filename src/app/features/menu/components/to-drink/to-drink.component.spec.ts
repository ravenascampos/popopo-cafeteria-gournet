import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDrinkComponent } from './to-drink.component';

describe('ToDrinkComponent', () => {
  let component: ToDrinkComponent;
  let fixture: ComponentFixture<ToDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
