import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay'
import { UIModalSidebarService } from './ui-modal-sidebar.service'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
  ]
})
export class UIModalSidebarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModalSidebarModule,
      providers: [ UIModalSidebarService ]
    };
  }
}
export {
  UIModalSidebarService
}
