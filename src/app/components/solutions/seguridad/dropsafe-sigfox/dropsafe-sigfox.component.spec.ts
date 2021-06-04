import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropsafeSigfoxComponent } from './dropsafe-sigfox.component';

describe('DropsafeSigfoxComponent', () => {
  let component: DropsafeSigfoxComponent;
  let fixture: ComponentFixture<DropsafeSigfoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropsafeSigfoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropsafeSigfoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
