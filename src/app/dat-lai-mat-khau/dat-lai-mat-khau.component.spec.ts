import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatLaiMatKhauComponent } from './dat-lai-mat-khau.component';

describe('DatLaiMatKhauComponent', () => {
  let component: DatLaiMatKhauComponent;
  let fixture: ComponentFixture<DatLaiMatKhauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatLaiMatKhauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatLaiMatKhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
