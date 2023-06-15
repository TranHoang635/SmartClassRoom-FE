import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGiangvienComponent } from './edit-giangvien.component';

describe('EditGiangvienComponent', () => {
  let component: EditGiangvienComponent;
  let fixture: ComponentFixture<EditGiangvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGiangvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGiangvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
