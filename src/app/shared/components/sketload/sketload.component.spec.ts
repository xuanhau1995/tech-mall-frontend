import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketloadComponent } from './sketload.component';

describe('SketloadComponent', () => {
  let component: SketloadComponent;
  let fixture: ComponentFixture<SketloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SketloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SketloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
