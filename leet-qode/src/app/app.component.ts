import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NobbarComponent } from './nobbar/nobbar.component';
import { HomebarComponent } from './homebar/homebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NobbarComponent,HomebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'leet-qode';
}
