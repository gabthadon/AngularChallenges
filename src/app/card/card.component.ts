import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() title:String='';
@Input() subtitle: string = '';
@Input() icon: string = '';
@Input() hasFooter: boolean = false;
}
