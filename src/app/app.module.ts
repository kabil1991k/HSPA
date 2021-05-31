import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import {PropertyCardComponent} from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
