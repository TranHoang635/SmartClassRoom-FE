import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLopHocComponent } from './edit-lop-hoc.component';

describe('EditLopHocComponent', () => {
  let component: EditLopHocComponent;
  let fixture: ComponentFixture<EditLopHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLopHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLopHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
