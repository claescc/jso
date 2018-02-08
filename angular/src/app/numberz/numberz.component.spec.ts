import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberzComponent } from './numberz.component';

describe('NumberzComponent', () => {
  let component: NumberzComponent;
  let fixture: ComponentFixture<NumberzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
