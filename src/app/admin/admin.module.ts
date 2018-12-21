import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthenticationAdminGuard } from '@app/core/authentication/authentication.admin.guard';
import { SignupModule } from '@app/signup/signup.module';

@NgModule({
  imports: [CommonModule, TranslateModule, AdminRoutingModule, SignupModule],
  providers:[
    AuthenticationAdminGuard
  ],
  declarations: [AdminComponent]
})
export class AdminModule {}
