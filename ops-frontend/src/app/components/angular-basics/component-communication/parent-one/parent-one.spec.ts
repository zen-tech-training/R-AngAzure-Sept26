import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentOne } from './parent-one';

describe('ParentOne', () => {
  let component: ParentOne;
  let fixture: ComponentFixture<ParentOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOne],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
