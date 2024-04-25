import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.scss'
})
export class NavabrComponent {
  authService = inject(AuthService);

  logout(){
    this.authService.logout();
    console.log('uje logout');
}

}
