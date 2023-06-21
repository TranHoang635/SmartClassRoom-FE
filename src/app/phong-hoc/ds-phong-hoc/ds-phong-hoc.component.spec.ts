import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhongHocComponent } from './ds-phong-hoc.component';

describe('DsPhongHocComponent', () => {
  let component: DsPhongHocComponent;
  let fixture: ComponentFixture<DsPhongHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhongHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPhongHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
