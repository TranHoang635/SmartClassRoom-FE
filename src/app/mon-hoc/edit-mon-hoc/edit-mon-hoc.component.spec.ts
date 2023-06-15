import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonHocComponent } from './edit-mon-hoc.component';

describe('EditMonHocComponent', () => {
  let component: EditMonHocComponent;
  let fixture: ComponentFixture<EditMonHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMonHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMonHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
