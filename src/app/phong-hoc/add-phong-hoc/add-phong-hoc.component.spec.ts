import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhongHocComponent } from './add-phong-hoc.component';

describe('AddPhongHocComponent', () => {
  let component: AddPhongHocComponent;
  let fixture: ComponentFixture<AddPhongHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhongHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhongHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
