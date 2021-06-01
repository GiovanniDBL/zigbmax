import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmSenseSigfoxComponent } from './atm-sense-sigfox.component';

describe('AtmSenseSigfoxComponent', () => {
  let component: AtmSenseSigfoxComponent;
  let fixture: ComponentFixture<AtmSenseSigfoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmSenseSigfoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmSenseSigfoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
