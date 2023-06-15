import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsUsersComponent } from './ds-users.component';

describe('DsUsersComponent', () => {
  let component: DsUsersComponent;
  let fixture: ComponentFixture<DsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
