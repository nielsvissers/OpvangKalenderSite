import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OudersComponent } from './ouders.component';

describe('OudersComponent', () => {
  let component: OudersComponent;
  let fixture: ComponentFixture<OudersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OudersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OudersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
