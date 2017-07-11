import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBadBadComponent } from './third-bad-bad.component';

describe('ThirdBadBadComponent', () => {
  let component: ThirdBadBadComponent;
  let fixture: ComponentFixture<ThirdBadBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdBadBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdBadBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
