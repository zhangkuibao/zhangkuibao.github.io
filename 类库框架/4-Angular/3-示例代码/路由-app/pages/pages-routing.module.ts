import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@NgModule({
    imports: [
        RouterModule.forRoot([{
            path: 'home',
            component: HomeComponent,
            children: [{
                path: '',
                canLoad: [AuthGuard],   // 只要有canLoad守卫就不会被预加载
                loadChildren: () => import('./page-module-a/page-module-a.module').then(m => m.PageModuleAModule),
                data: {
                    preload: true   // data中的数据可以被守卫获取到
                }
            }]
        }], {
            preloadingStrategy: SelectivePreloadingStrategyService
        })
    ]
})
export class PagesRoutingModule { }