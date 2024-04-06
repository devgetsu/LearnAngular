import { Card } from './../../interfaces/card';
import { Component } from '@angular/core';
import { CardComponent } from "../page/card/card.component";
import { CardsService } from '../../services/cards.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent]
})
export class HomeComponent {
    constructor(private cardService : CardsService) { }

    cards : Card[] = this.cardService.getallCards();
}
