import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhuHuynhComponent } from './phu-huynh.component';

describe('PhuHuynhComponent', () => {
  let component: PhuHuynhComponent;
  let fixture: ComponentFixture<PhuHuynhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhuHuynhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhuHuynhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
