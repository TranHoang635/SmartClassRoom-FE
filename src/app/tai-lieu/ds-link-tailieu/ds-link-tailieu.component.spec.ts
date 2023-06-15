import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLinkTailieuComponent } from './ds-link-tailieu.component';

describe('DsLinkTailieuComponent', () => {
  let component: DsLinkTailieuComponent;
  let fixture: ComponentFixture<DsLinkTailieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsLinkTailieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsLinkTailieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
