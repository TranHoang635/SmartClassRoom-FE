import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhongHocComponent } from './edit-phong-hoc.component';

describe('EditPhongHocComponent', () => {
  let component: EditPhongHocComponent;
  let fixture: ComponentFixture<EditPhongHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhongHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhongHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
