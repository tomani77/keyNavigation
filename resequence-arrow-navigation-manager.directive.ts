import { Directive, ContentChildren, AfterViewInit, QueryList, HostListener, forwardRef } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { FocusKeyManager, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';

@Directive({
  selector: '[appArrowNavigationManager]'
})
export class ResequenceArrowNavigationManager implements AfterViewInit {
  
  @ContentChildren(forwardRef(() => ListItemComponent)) listItemComponent: QueryList<ListItemComponent>;
  // private keyManager: FocusKeyManager<ListItemComponent>;
 private keyManager: ActiveDescendantKeyManager<ListItemComponent>;
 
  @HostListener('keyup', ['$event']) 
  keyUp(event) {
    console.log('key up event called');
    
    if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
      this.keyManager.onKeydown(event);
    } 
  }
  
  ngAfterViewInit(): void {
    // this.keyManager = new FocusKeyManager(this.listItemComponent).withWrap();
     this.keyManager = new ActiveDescendantKeyManager(this.listItemComponent).withWrap();
      
  }

  constructor() { 

  }

  public setActiveElement(listItemComponent: ListItemComponent) {
    this.keyManager.setActiveItem(listItemComponent);
  }
  
   

}
