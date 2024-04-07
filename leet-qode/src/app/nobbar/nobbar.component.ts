import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nobbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nobbar.component.html',
  styleUrl: './nobbar.component.scss'
})
export class NobbarComponent {

}
