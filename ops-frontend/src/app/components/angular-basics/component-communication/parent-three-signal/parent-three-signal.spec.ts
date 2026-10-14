import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentThreeSignal } from './parent-three-signal';

describe('ParentThreeSignal', () => {
  let component: ParentThreeSignal;
  let fixture: ComponentFixture<ParentThreeSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentThreeSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentThreeSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
