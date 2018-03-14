import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadConditionsComponent } from './road-conditions.component';

describe('RoadConditionsComponent', () => {
  let component: RoadConditionsComponent;
  let fixture: ComponentFixture<RoadConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
