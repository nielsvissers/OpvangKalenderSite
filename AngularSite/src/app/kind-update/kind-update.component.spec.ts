import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindUpdateComponent } from './kind-update.component';

describe('KindUpdateComponent', () => {
  let component: KindUpdateComponent;
  let fixture: ComponentFixture<KindUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
