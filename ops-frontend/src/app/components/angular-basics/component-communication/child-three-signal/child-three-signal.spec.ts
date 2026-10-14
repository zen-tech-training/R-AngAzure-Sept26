import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildThreeSignal } from './child-three-signal';

describe('ChildThreeSignal', () => {
  let component: ChildThreeSignal;
  let fixture: ComponentFixture<ChildThreeSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildThreeSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildThreeSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
