import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSinhvienComponent } from './delete-sinhvien.component';

describe('DeleteSinhvienComponent', () => {
  let component: DeleteSinhvienComponent;
  let fixture: ComponentFixture<DeleteSinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
