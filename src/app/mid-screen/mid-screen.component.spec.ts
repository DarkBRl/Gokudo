import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidScreenComponent } from './mid-screen.component';

describe('MidScreenComponent', () => {
  let component: MidScreenComponent;
  let fixture: ComponentFixture<MidScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
