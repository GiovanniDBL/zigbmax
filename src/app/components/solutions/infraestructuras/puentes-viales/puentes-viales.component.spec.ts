import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuentesVialesComponent } from './puentes-viales.component';

describe('PuentesVialesComponent', () => {
  let component: PuentesVialesComponent;
  let fixture: ComponentFixture<PuentesVialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuentesVialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuentesVialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
