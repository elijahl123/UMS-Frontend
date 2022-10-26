import { Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
   selector: '[uiModal]',
   standalone: true
})
export class ModalDirective implements OnInit, OnDestroy {
   @HostBinding('class.open') isOpen = false
   @Input() open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

   constructor(private elRef: ElementRef) {
   }

   ngOnInit(): void {
      this.open.subscribe(value => {
         this.isOpen = value;
      });
   }

   @HostListener('document:click', ['$event']) toggleOpen(event?: Event) {
      if (event) {
         if (this.elRef.nativeElement.contains(event.target) && !this.elRef.nativeElement.lastChild.lastChild.contains(event.target)) {
            this.isOpen = !this.isOpen;
         }
      } else {
         this.isOpen = !this.isOpen;
      }
   }

   ngOnDestroy(): void {
      this.open.unsubscribe();
   }

}
