import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLinkTailieuComponent } from './delete-link-tailieu.component';

describe('DeleteLinkTailieuComponent', () => {
  let component: DeleteLinkTailieuComponent;
  let fixture: ComponentFixture<DeleteLinkTailieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLinkTailieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLinkTailieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
