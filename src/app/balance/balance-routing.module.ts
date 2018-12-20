import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { BalanceComponent } from './balance.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'balance', component: BalanceComponent, data: { title: extract('Balance') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BalanceRoutingModule {}
