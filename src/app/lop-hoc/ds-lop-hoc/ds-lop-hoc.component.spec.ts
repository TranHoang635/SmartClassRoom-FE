import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLopHocComponent } from './ds-lop-hoc.component';

describe('DsLopHocComponent', () => {
  let component: DsLopHocComponent;
  let fixture: ComponentFixture<DsLopHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsLopHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsLopHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
