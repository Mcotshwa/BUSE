import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInPage } from './log-in.page';


const routes: Routes = [
  {
    path: '',
    component: LogInPage, 
  },
  {
    path: 'tabs',
    loadChildren: () => import('src/app/tabs/tabs.module').then(m => m.TabsPageModule)
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInPageRoutingModule {}
