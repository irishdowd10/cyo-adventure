import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGoodGoodComponent } from './third-good-good.component';

describe('ThirdGoodGoodComponent', () => {
  let component: ThirdGoodGoodComponent;
  let fixture: ComponentFixture<ThirdGoodGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdGoodGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdGoodGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
