import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeHeaderComponent } from './view-recipe-header.component';

describe('ViewRecipeHeaderComponent', () => {
  let component: ViewRecipeHeaderComponent;
  let fixture: ComponentFixture<ViewRecipeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRecipeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
