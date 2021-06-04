import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrienteAlternaComponent } from './corriente-alterna.component';

describe('CorrienteAlternaComponent', () => {
  let component: CorrienteAlternaComponent;
  let fixture: ComponentFixture<CorrienteAlternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrienteAlternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrienteAlternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
