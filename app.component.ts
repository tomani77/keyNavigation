import { Component, ViewChildren, QueryList, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { ActiveDescendantKeyManager, ListKeyManager, FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { ListItemComponent } from './list-item/list-item.component';
import {Observable, of } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  ngOnInit(): void {
    this.getData().subscribe(value => {
      this.users = value;
    })  
  }

  // @ViewChildren(ListItemComponent) items: QueryList<ListItemComponent>;
  // @ViewChild(ArrowNavigationManagerDirective) manager: ArrowNavigationManagerDirective;

  buttonClick() {
   // console.log(this.manager);
    
  }
  
  public users = [];
  _users = [
    {
      "id": "5b902934d965e7501f4e1c6f",
      "name": "Caroline Hodges"
    },
    {
      "id": "5b9029348f7eed8b6f5f02db",
      "name": "Delores Rivas"
    },
    {
      "id": "5b9029346f48c8407c64d0d5",
      "name": "Darlene Franklin"
    },
    {
      "id": "5b9029341eff315fa87f9e21",
      "name": "Alfreda Love"
    },
    {
      "id": "5b9029342e8917c6ccdb9865",
      "name": "Marcy Ratliff"
    },
    {
      "id": "5b9029349dbb48013460e01f",
      "name": "Beulah Nielsen"
    },
    {
      "id": "5b902934f4f1586e5e72d74a",
      "name": "Morton Kerr"
    },
    {
      "id": "5b9029347918bb204bf7014e",
      "name": "Autumn Tillman"
    },
    {
      "id": "5b902934b86f80e1fc60c626",
      "name": "Diane Bennett"
    },
    {
      "id": "5b9029348999f59215020349",
      "name": "June Eaton"
    }
  ]

  // private keyManager: ActiveDescendantKeyManager<ListItemComponent>;
  // private keyManager: ListKeyManager<ListItemComponent>;
  // keyManager: FocusKeyManager<ListItemComponent>;
  model = '';

  ngAfterViewInit() {
    console.log('afterViewinit of app component called');
    
    // this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap()
    //   .withTypeAhead();

    // this.keyManager = new FocusKeyManager(this.items).withWrap()
    //   .withTypeAhead();

   
  }

  // onKeydown(event) {
  //   // if (event.keyCode === ENTER) {
  //   //   this.model = this.keyManager.activeItem.item.name;
  //   // } else {
  //   //   this.keyManager.onKeydown(event);
  //   // }
  // }

  private getData() {
    return of(this._users).pipe(delay(4000));
  }
}
