import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'create',
                loadChildren: () => import('../create/create.module').then(m => m.CreatePageModule)
            },
            {
                path: 'update',
                loadChildren: () => import('../create/create.module').then(m => m.CreatePageModule)
            },
            {
                path: 'get',
                loadChildren: () => import('../create/create.module').then(m => m.CreatePageModule)
            },
            {
                path: 'sync',
                loadChildren: () => import('../create/create.module').then(m => m.CreatePageModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
