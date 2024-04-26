import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule,HomeComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
 txt = "sdadf"

 items = ['item1', 'item2', 'item3', 'item4'];

 addItem(newItem: string) {
   this.items.push(newItem);
 }
}
