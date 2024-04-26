import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./home.component.html",
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() myText: string = '';
  
  @Output() newItemEvent = new EventEmitter<string>();

  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
