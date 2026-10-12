import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneWayTwoWayDataBinding } from './one-way-two-way-data-binding';

describe('OneWayTwoWayDataBinding', () => {
  let component: OneWayTwoWayDataBinding;
  let fixture: ComponentFixture<OneWayTwoWayDataBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneWayTwoWayDataBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(OneWayTwoWayDataBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
