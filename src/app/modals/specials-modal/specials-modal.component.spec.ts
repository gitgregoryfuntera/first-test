import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsModalComponent } from './specials-modal.component';

describe('SpecialsModalComponent', () => {
  let component: SpecialsModalComponent;
  let fixture: ComponentFixture<SpecialsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
