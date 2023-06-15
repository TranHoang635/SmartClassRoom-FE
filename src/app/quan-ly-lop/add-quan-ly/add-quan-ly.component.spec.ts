import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuanLyComponent } from './add-quan-ly.component';

describe('AddQuanLyComponent', () => {
  let component: AddQuanLyComponent;
  let fixture: ComponentFixture<AddQuanLyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuanLyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuanLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
