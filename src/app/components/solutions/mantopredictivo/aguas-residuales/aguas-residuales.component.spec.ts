import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguasResidualesComponent } from './aguas-residuales.component';

describe('AguasResidualesComponent', () => {
  let component: AguasResidualesComponent;
  let fixture: ComponentFixture<AguasResidualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguasResidualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AguasResidualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
