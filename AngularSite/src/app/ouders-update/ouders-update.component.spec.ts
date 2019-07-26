import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OudersUpdateComponent } from './ouders-update.component';

describe('OudersUpdateComponent', () => {
  let component: OudersUpdateComponent;
  let fixture: ComponentFixture<OudersUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OudersUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OudersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
