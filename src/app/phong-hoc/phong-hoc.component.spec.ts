import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongHocComponent } from './phong-hoc.component';

describe('PhongHocComponent', () => {
  let component: PhongHocComponent;
  let fixture: ComponentFixture<PhongHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
