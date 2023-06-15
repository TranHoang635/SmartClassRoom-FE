import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkTailieuComponent } from './add-link-tailieu.component';

describe('AddLinkTailieuComponent', () => {
  let component: AddLinkTailieuComponent;
  let fixture: ComponentFixture<AddLinkTailieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLinkTailieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinkTailieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
