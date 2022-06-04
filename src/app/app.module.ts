import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { MarvelListComponent } from './marvel-list/marvel-list.component';
import { DataService } from './data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SaveButtonComponent } from './save-button/save-button.component';
import { CookieService } from 'ngx-cookie-service';
import { FindheroComponent } from './findhero/findhero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MarvelListComponent,
    SaveButtonComponent,
    FindheroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    NgxPaginationModule,FormsModule
    
  ],
  providers: [DataService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }