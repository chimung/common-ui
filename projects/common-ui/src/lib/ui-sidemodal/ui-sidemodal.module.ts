import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay'
import { UISidemodalService } from './ui-sidemodal.service';
import { ShellComponent } from './components/shell/shell.component';
import { ViewInjectPointDirective } from './directives/view-inject-point.directive'
import { UISidemodalActiveService } from './services/ui-sidemodal-active/ui-sidemodal-active.service'
import { UISidemodalDataService } from './services/ui-sidemodal-data/ui-sidemodal-data.service'



@NgModule({
  declarations: [ShellComponent, ViewInjectPointDirective],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
  ],
  entryComponents: [ShellComponent]
})
export class UISidemodalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UISidemodalModule,
      providers: [ UISidemodalService, UISidemodalActiveService, UISidemodalDataService ]
    };
  }
}
export {
  UISidemodalService,
  UISidemodalActiveService
}
