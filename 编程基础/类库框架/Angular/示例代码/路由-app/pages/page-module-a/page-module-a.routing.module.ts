import { NgModule } from '@angular/core';
import { PageBComponent } from './page-b/page-b.component';
import { PageAComponent } from './page-a/page-a.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [{
  path: 'module-a-page-a',
  canDeactivate: [AuthGuard],
  component: PageAComponent
}, {
  path: 'module-a-page-b',
  canDeactivate: [AuthGuard],
  component: PageBComponent
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageModuleARoutingModule { }
