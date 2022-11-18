import { Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Directive({
  selector: '[uiModal]',
  standalone: true
})
export class ModalDirective implements OnInit, OnDestroy {
  @HostBinding('class.open') isOpen = false
  @Input() open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private elRef: ElementRef, private router: Router) {
  }

  ngOnInit(): void {
    this.open.subscribe(value => {
      this.isOpen = value;
    });
  }

  @HostListener('document:click', ['$event']) toggleOpen(event?: Event) {
    if (event) {
      if (event.target === this.elRef.nativeElement) {
        this.router.navigate([{outlets: {modal: null}}]);
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
