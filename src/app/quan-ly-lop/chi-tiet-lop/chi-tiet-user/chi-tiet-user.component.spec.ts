import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietUserComponent } from './chi-tiet-user.component';

describe('ChiTietUserComponent', () => {
  let component: ChiTietUserComponent;
  let fixture: ComponentFixture<ChiTietUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
