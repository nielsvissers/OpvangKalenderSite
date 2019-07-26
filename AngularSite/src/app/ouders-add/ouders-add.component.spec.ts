import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OudersAddComponent } from './ouders-add.component';

describe('OudersAddComponent', () => {
  let component: OudersAddComponent;
  let fixture: ComponentFixture<OudersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OudersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OudersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
