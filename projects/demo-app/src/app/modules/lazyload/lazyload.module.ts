import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadRoutingModule } from './lazyload-routing.module';
import { LazyloadCompComponent } from './lazyload-comp/lazyload-comp.component';
import { ModalComponent } from './modal/modal.component';
import { UISidemodalModule } from 'ngx-common-ui';


@NgModule({
  declarations: [LazyloadCompComponent, ModalComponent],
  imports: [
    CommonModule,
    LazyloadRoutingModule,
    UISidemodalModule
  ],
  entryComponents: [ModalComponent]
})
export class LazyloadModule { }
