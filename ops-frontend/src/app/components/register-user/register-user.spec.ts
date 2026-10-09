import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CreateUser, UserResponse } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { RegisterUser } from './register-user';

describe('RegisterUser', () => {
  let component: RegisterUser;
  let fixture: ComponentFixture<RegisterUser>;
  let submittedUser: CreateUser | undefined;

  beforeEach(async () => {
    submittedUser = undefined;

    await TestBed.configureTestingModule({
      imports: [RegisterUser],
      providers: [
        {
          provide: UserService,
          useValue: {
            createUser: (user: CreateUser) => {
              submittedUser = user;
              return of<UserResponse>({
                id: 1,
                ...user,
              });
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('registers the form values', () => {
    component.registrationForm.setValue({
      name: 'Taylor User',
      username: 'taylor',
      email: 'taylor@example.com',
      phone: '555-1234',
    });

    component.saveUser();

    expect(submittedUser).toEqual({
      name: 'Taylor User',
      username: 'taylor',
      email: 'taylor@example.com',
      phone: '555-1234',
    });
    expect(component.submissionMessage()).toBe('User registered successfully.');
  });
});
