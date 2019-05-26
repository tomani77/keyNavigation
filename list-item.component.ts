import { Component, OnInit, ViewChildren, HostBinding, Input, ViewChild, ElementRef, HostListener, Output, EventEmitter, forwardRef, Inject } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
// import {ResequenceArrowNavigationManager} from '../resequence-arrow-navigation-manager.directive';
import { IfStmt } from '@angular/compiler';

// const CircularServiceFwd = forwardRef(() => ResequenceArrowNavigationManager);

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements Highlightable {
  
  @Input() item;
  @Input() disabled = false;

  @Output() onSequenceNumberTextboxFocus = new EventEmitter();

  private _isActive = false;
  @ViewChild('textboxelement') input: ElementRef

  // constructor(private resequenceKeyManager: ResequenceArrowNavigationManager) {
  // constructor(@Inject(CircularServiceFwd) private resequenceKeyManager: ResequenceArrowNavigationManager){

  // }

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  };

  setActiveStyles() {
    console.log('set Active Called');
    // console.log('setActiveStyles called');
    this._isActive = true;
    this.input.nativeElement.focus();
  };

  setInactiveStyles() {
    // console.log('setInactiveStyles called');
     this._isActive = false;
  }

  
  // focus() {
  //   console.log('Focus called');
  //   this.input.nativeElement.focus();
    
  // }

  public onTextBoxFocus($event) {
    // if(this._isActive) return;
    // console.log('asdfasdfasdf');
    // this.resequenceKeyManager.setActiveElement(this);
  }
}