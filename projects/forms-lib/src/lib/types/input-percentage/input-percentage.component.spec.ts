import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPercentageComponent } from './input-percentage.component';

describe('InputPercentageComponent', () => {
  let component: InputPercentageComponent;
  let fixture: ComponentFixture<InputPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
