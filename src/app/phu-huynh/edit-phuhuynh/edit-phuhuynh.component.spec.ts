import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhuhuynhComponent } from './edit-phuhuynh.component';

describe('EditPhuhuynhComponent', () => {
  let component: EditPhuhuynhComponent;
  let fixture: ComponentFixture<EditPhuhuynhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhuhuynhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhuhuynhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
