import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalicasComponent } from './metalicas.component';

describe('MetalicasComponent', () => {
  let component: MetalicasComponent;
  let fixture: ComponentFixture<MetalicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
