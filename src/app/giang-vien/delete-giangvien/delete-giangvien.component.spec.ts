import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGiangvienComponent } from './delete-giangvien.component';

describe('DeleteGiangvienComponent', () => {
  let component: DeleteGiangvienComponent;
  let fixture: ComponentFixture<DeleteGiangvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGiangvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGiangvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
