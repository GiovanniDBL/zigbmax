import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultsenseSigfoxComponent } from './vaultsense-sigfox.component';

describe('VaultsenseSigfoxComponent', () => {
  let component: VaultsenseSigfoxComponent;
  let fixture: ComponentFixture<VaultsenseSigfoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaultsenseSigfoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultsenseSigfoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
