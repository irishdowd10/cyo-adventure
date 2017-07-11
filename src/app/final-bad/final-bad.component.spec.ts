import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBadComponent } from './final-bad.component';

describe('FinalBadComponent', () => {
  let component: FinalBadComponent;
  let fixture: ComponentFixture<FinalBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
