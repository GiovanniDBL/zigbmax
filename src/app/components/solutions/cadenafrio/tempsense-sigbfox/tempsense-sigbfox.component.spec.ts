import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsenseSigbfoxComponent } from './tempsense-sigbfox.component';

describe('TempsenseSigbfoxComponent', () => {
  let component: TempsenseSigbfoxComponent;
  let fixture: ComponentFixture<TempsenseSigbfoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempsenseSigbfoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsenseSigbfoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
