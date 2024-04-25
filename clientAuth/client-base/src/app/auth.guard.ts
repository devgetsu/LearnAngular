import { CanActivateFn } from '@angular/router';
const token = "accessToken"
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};

export const homeGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem(token) != null || localStorage.getItem(token) != "")
  {
    return true;
  } 
  return false;
};

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem(token) != null || localStorage.getItem(token) != "")
    return true;

    return false;
};