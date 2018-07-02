import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressloveComponent } from './expresslove.component';

describe('ExpressloveComponent', () => {
  let component: ExpressloveComponent;
  let fixture: ComponentFixture<ExpressloveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressloveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
