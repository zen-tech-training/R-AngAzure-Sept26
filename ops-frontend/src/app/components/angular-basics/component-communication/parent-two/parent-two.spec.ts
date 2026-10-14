import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentTwo } from './parent-two';

describe('ParentTwo', () => {
  let component: ParentTwo;
  let fixture: ComponentFixture<ParentTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
