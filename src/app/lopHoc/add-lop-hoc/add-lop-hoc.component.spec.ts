import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLopHocComponent } from './add-lop-hoc.component';

describe('AddLopHocComponent', () => {
  let component: AddLopHocComponent;
  let fixture: ComponentFixture<AddLopHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLopHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLopHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
