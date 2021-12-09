import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPetsComponent } from './to-pets.component';

describe('ToPetsComponent', () => {
  let component: ToPetsComponent;
  let fixture: ComponentFixture<ToPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
