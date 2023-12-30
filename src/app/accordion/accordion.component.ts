import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})



export class AccordionComponent {
  @Input() items: { title: string, body: string }[] = [];
openIndex:number | null = null;



toggleAccordion(index: number): void{
  this.openIndex=(this.openIndex==index) ? null : index;
  
  
}

}
