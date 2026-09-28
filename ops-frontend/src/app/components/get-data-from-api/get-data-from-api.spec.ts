import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetDataFromApi } from './get-data-from-api';

describe('GetDataFromApi', () => {
  let component: GetDataFromApi;
  let fixture: ComponentFixture<GetDataFromApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDataFromApi],
    }).compileComponents();

    fixture = TestBed.createComponent(GetDataFromApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
