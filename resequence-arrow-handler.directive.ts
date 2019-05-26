import { Directive, HostListener, Input } from '@angular/core';
import { ResequenceArrowNavigationManager } from './resequence-arrow-navigation-manager.directive';
import { ListItemComponent } from './list-item/list-item.component'; 

@Directive({
  selector: '[appResequenceArrowHandler]'
})
export class ResequenceArrowHandlerDirective {
  @Input() isActive:boolean;

  @HostListener('focus', ['$event']) 
  onTocus(event) {
    if(this.isActive) return;
    console.log('asdfasdfasdf');
    this.arrowNavigationManager.setActiveElement(this.listComponent);
  }


  constructor( private arrowNavigationManager: ResequenceArrowNavigationManager, private listComponent: ListItemComponent) { 

  }

}
