import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLopHocComponent } from './delete-lop-hoc.component';

describe('DeleteLopHocComponent', () => {
  let component: DeleteLopHocComponent;
  let fixture: ComponentFixture<DeleteLopHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLopHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLopHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
