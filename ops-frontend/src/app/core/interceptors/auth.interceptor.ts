//File path: src/app/core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

//Class based Vs Function Based Interceptor

//Function Based Interceptor
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenStorageService);
  const token = tokenService.getToken();
  // const token= "my dummy token";

  if (!token) {  // (!undefined) //If token is empty then execute return next(req);
  // if(data) -> if(true) //if(!token) -> exceute return next(req);
  //if(!data) -> if(!false) => if(true)
    return next(req);
  }
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(clonedRequest);
};