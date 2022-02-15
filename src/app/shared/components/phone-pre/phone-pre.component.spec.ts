import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePreComponent } from './phone-pre.component';

describe('PhonePreComponent', () => {
  let component: PhonePreComponent;
  let fixture: ComponentFixture<PhonePreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
