import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay'
import { UIModalSidebarService } from './ui-modal-sidebar.service';
import { ShellComponent } from './components/shell/shell.component';
import { ViewInjectPointDirective } from './directives/view-inject-point.directive'
import { UISidemodalActiveService } from './services/ui-sidemodal-active/ui-sidemodal-active.service'
import { UISidemodalDataService } from './services/ui-sidemodal-data/ui-sidemodal-data.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [ShellComponent, ViewInjectPointDirective],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [
  ],
  entryComponents: [ShellComponent]
})
export class UIModalSidebarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModalSidebarModule,
      providers: [ UIModalSidebarService, UISidemodalActiveService, UISidemodalDataService ]
    };
  }
}
export {
  UIModalSidebarService,
  UISidemodalActiveService
}
