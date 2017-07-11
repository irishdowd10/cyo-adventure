import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBadGoodComponent } from './third-bad-good.component';

describe('ThirdBadGoodComponent', () => {
  let component: ThirdBadGoodComponent;
  let fixture: ComponentFixture<ThirdBadGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdBadGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdBadGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
