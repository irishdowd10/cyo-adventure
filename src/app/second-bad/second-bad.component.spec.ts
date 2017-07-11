import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBadComponent } from './second-bad.component';

describe('SecondBadComponent', () => {
  let component: SecondBadComponent;
  let fixture: ComponentFixture<SecondBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
