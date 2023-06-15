import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsMonHocComponent } from './ds-mon-hoc.component';

describe('DsMonHocComponent', () => {
  let component: DsMonHocComponent;
  let fixture: ComponentFixture<DsMonHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsMonHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsMonHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
