import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePhuhuynhComponent } from './delete-phuhuynh.component';

describe('DeletePhuhuynhComponent', () => {
  let component: DeletePhuhuynhComponent;
  let fixture: ComponentFixture<DeletePhuhuynhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePhuhuynhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePhuhuynhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
