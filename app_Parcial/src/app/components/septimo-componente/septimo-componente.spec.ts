import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeptimoComponente } from './septimo-componente';

describe('SeptimoComponente', () => {
  let component: SeptimoComponente;
  let fixture: ComponentFixture<SeptimoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeptimoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(SeptimoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
