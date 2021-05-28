import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantopredictivoComponent } from './mantopredictivo.component';

describe('MantopredictivoComponent', () => {
  let component: MantopredictivoComponent;
  let fixture: ComponentFixture<MantopredictivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantopredictivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantopredictivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
