import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalisanlarComponent } from './calisanlar.component';

describe('CalisanlarComponent', () => {
  let component: CalisanlarComponent;
  let fixture: ComponentFixture<CalisanlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalisanlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalisanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
