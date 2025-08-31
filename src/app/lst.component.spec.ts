import { TestBed } from '@angular/core/testing';
import { LstComponent } from './lst.component';

describe('LstComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LstComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LstComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'listify' title`, () => {
    const fixture = TestBed.createComponent(LstComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('listify');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LstComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, listify');
  });
});
