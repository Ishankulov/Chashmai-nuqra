import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list-animals',
        loadChildren: () => import('./list-animals/list-animals.module').then(m => m.ListAnimalsModule),
      },

      {
        path: 'histories',
        loadChildren: () => import('./histories/histories.module').then(m => m.HistoriesModule),
      },
      {
        path: 'reports',
        loadChildren: () => import('./report/report.module').then(m => m.ReportModule),
      },
      {
        path: '',
        redirectTo: 'list-animals',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
