import { TestBed, async } from '@angular/core/testing';
import { VersedComponent } from './versed.component';

describe('VersedComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VersedComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(VersedComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'versed'`, () => {
    const fixture = TestBed.createComponent(VersedComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('versed');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(VersedComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to versed!');
  });
});
