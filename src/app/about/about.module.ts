import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgbProgressbarModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, NgbProgressbarModule, NgbAccordionModule],
  declarations: [AboutComponent]
})
export class AboutModule {}
