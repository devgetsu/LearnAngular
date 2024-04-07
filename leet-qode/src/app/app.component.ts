import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NobbarComponent } from './nobbar/nobbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NobbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'leet-qode';
}
