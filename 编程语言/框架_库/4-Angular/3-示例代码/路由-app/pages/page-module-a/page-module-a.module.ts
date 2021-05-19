import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBComponent } from './page-b/page-b.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageModuleARoutingModule } from './page-module-a.routing.module'


@NgModule({
  declarations: [PageBComponent, PageAComponent],
  imports: [
    CommonModule,
    PageModuleARoutingModule
  ]
})
export class PageModuleAModule { }
