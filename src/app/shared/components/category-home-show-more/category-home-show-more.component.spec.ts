import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHomeShowMoreComponent } from './category-home-show-more.component';

describe('CategoryHomeShowMoreComponent', () => {
  let component: CategoryHomeShowMoreComponent;
  let fixture: ComponentFixture<CategoryHomeShowMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryHomeShowMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHomeShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
