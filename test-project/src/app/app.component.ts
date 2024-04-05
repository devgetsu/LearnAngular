import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbarComponent } from './components/nbar/nbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-project';
}
