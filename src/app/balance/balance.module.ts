import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance.component';

@NgModule({
  imports: [CommonModule, TranslateModule, BalanceRoutingModule],
  declarations: [BalanceComponent]
})
export class BalanceModule {}
