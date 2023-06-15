import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhuhuynhComponent } from './add-phuhuynh.component';

describe('AddPhuhuynhComponent', () => {
  let component: AddPhuhuynhComponent;
  let fixture: ComponentFixture<AddPhuhuynhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhuhuynhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhuhuynhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
