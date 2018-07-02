import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygiftComponent } from './mygift.component';

describe('MygiftComponent', () => {
  let component: MygiftComponent;
  let fixture: ComponentFixture<MygiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
