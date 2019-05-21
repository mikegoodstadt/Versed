import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiConfirmComponent } from './ui-confirm.component';

describe('UiConfirmComponent', () => {
  let component: UiConfirmComponent;
  let fixture: ComponentFixture<UiConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
