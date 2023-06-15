import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSinhvienComponent } from './edit-sinhvien.component';

describe('EditSinhvienComponent', () => {
  let component: EditSinhvienComponent;
  let fixture: ComponentFixture<EditSinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
