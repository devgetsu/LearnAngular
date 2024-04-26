import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
const token = "accessToken"

var router = inject(Router)
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};

export const homeGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem(token) == null || localStorage.getItem(token) == "" || localStorage.getItem(token) == undefined)
  {
    router.navigateByUrl('/login')
    return false;
  } 
  return true;
};

export const adminGuard: CanActivateFn = (route, state) => {
  return true;
};