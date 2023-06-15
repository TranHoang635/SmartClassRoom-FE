import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuanLyComponent } from './edit-quan-ly.component';

describe('EditQuanLyComponent', () => {
  let component: EditQuanLyComponent;
  let fixture: ComponentFixture<EditQuanLyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuanLyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuanLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
