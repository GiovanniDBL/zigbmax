import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondamientosComponent } from './rondamientos.component';

describe('RondamientosComponent', () => {
  let component: RondamientosComponent;
  let fixture: ComponentFixture<RondamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RondamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RondamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
