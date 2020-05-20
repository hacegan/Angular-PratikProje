import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinansalvarliklarComponent } from './finansalvarliklar.component';

describe('FinansalvarliklarComponent', () => {
  let component: FinansalvarliklarComponent;
  let fixture: ComponentFixture<FinansalvarliklarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinansalvarliklarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinansalvarliklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
