import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSinhvienComponent } from './add-sinhvien.component';

describe('AddSinhvienComponent', () => {
  let component: AddSinhvienComponent;
  let fixture: ComponentFixture<AddSinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
