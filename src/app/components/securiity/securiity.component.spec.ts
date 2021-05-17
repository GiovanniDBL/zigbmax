import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriityComponent } from './securiity.component';

describe('SecuriityComponent', () => {
  let component: SecuriityComponent;
  let fixture: ComponentFixture<SecuriityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuriityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
