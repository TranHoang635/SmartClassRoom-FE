import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsGiangvienComponent } from './ds-giangvien.component';

describe('DsGiangvienComponent', () => {
  let component: DsGiangvienComponent;
  let fixture: ComponentFixture<DsGiangvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsGiangvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsGiangvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
