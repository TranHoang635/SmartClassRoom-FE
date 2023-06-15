import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoiKhoaBieuComponent } from './thoi-khoa-bieu.component';

describe('ThoiKhoaBieuComponent', () => {
  let component: ThoiKhoaBieuComponent;
  let fixture: ComponentFixture<ThoiKhoaBieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoiKhoaBieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoiKhoaBieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
