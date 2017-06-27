import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdSelectModule, MdInputModule, MdCardModule, MdToolbarModule, MdIconModule, MdListModule, MdChipsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './search.service';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MdMenuModule} from '@angular/material';
import { RouterModule, Routes }   from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    FlexLayoutModule,
    MdSelectModule,
    MdListModule,
    MdChipsModule,
    MdMenuModule,
    RouterModule.forRoot([
      {
        path: 'account',
        component: AccountInfoComponent
      },
      {
        path:'',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
