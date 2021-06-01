import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmSenseSlaveComponent } from './atm-sense-slave.component';

describe('AtmSenseSlaveComponent', () => {
  let component: AtmSenseSlaveComponent;
  let fixture: ComponentFixture<AtmSenseSlaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmSenseSlaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmSenseSlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
