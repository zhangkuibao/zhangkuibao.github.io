import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';


import { PagesModule } from './pages/pages.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ // 当前应用所需外部模块的列表
    BrowserModule,
    FormsModule,
    RouterModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
