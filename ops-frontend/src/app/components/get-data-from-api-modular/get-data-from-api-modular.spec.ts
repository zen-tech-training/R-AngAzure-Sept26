import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetDataFromApiModular } from './get-data-from-api-modular';

describe('GetDataFromApiModular', () => {
  let component: GetDataFromApiModular;
  let fixture: ComponentFixture<GetDataFromApiModular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDataFromApiModular],
    }).compileComponents();

    fixture = TestBed.createComponent(GetDataFromApiModular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
