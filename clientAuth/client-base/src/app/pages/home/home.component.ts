import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  router = inject(Router);
  
  tokenDecoded: any;
  constructor(private readonly translocoService: TranslocoService){
    this.translocoService.translate('title')
    this.translocoService.translate('form.firstName')
  }
  ngOnInit(): void {
    this.tokenDecoded = jwtDecode(localStorage.getItem("accessToken")!)
    console.log('decoded token');
    console.log(this.tokenDecoded);
    console.log('data kelyabdi');
      console.log(Date.now());

    if(this.tokenDecoded.exp * 1000 < Date.now()){
      this.router.navigate(['/register'])
    }
  }

  public languagesList: 
    Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>> = [
    {
      imgUrl: '/assets/images/English.png',
      code: 'en',
      name: 'English',
      shorthand: 'ENG',
    },
    {
      imgUrl: '/assets/images/russia.png',
      code: 'ru',
      name: 'Russian',
      shorthand: 'RU',
    },
    {
      imgUrl: '/assets/images/uzbekistan.png',
      code: 'uz',
      name: 'Uzbekistan',
      shorthand: 'UZB',
    },
  ];
  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    languageCode === 'fl'
      ? (document.body.style.direction = 'rtl')
      : (document.body.style.direction = 'ltr');
  }
}
