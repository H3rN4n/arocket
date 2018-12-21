import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, TranslateModule, NgbModule, SignupRoutingModule],
  declarations: [SignupComponent]
})
export class SignupModule {}
