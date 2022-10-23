import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableListService } from './table-list.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents, 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NgbModule
  ],
  providers: [TableListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
