import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonHocComponent } from './add-mon-hoc.component';

describe('AddMonHocComponent', () => {
  let component: AddMonHocComponent;
  let fixture: ComponentFixture<AddMonHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMonHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
