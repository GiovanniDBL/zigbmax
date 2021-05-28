import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenafrioComponent } from './cadenafrio.component';

describe('CadenafrioComponent', () => {
  let component: CadenafrioComponent;
  let fixture: ComponentFixture<CadenafrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadenafrioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadenafrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
