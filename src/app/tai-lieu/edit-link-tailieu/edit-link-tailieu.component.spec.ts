import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLinkTailieuComponent } from './edit-link-tailieu.component';

describe('EditLinkTailieuComponent', () => {
  let component: EditLinkTailieuComponent;
  let fixture: ComponentFixture<EditLinkTailieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLinkTailieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLinkTailieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
