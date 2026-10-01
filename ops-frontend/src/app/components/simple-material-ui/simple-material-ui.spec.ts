import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleMaterialUI } from './simple-material-ui';

describe('SimpleMaterialUI', () => {
  let component: SimpleMaterialUI;
  let fixture: ComponentFixture<SimpleMaterialUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleMaterialUI],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleMaterialUI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
