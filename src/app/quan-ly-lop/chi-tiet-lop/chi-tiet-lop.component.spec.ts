import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietLopComponent } from './chi-tiet-lop.component';

describe('ChiTietLopComponent', () => {
  let component: ChiTietLopComponent;
  let fixture: ComponentFixture<ChiTietLopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietLopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
