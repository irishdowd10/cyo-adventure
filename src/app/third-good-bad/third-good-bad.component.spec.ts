import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGoodBadComponent } from './third-good-bad.component';

describe('ThirdGoodBadComponent', () => {
  let component: ThirdGoodBadComponent;
  let fixture: ComponentFixture<ThirdGoodBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdGoodBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdGoodBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
