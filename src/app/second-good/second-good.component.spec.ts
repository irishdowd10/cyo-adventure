import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGoodComponent } from './second-good.component';

describe('SecondGoodComponent', () => {
  let component: SecondGoodComponent;
  let fixture: ComponentFixture<SecondGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
