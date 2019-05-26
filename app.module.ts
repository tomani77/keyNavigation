import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FilterPipe } from './filter.pipe';
import { ResequenceArrowNavigationManager } from './resequence-arrow-navigation-manager.directive';
import { ResequenceArrowHandlerDirective } from './resequence-arrow-handler.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListItemComponent, FilterPipe, ResequenceArrowNavigationManager, ResequenceArrowHandlerDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
