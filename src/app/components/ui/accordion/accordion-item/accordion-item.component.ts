import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  isOpen: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.isOpen = !this.isOpen;
  }
}
