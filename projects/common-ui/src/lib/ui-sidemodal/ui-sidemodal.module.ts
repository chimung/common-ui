import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay'
import { UISidemodalService } from './ui-sidemodal.service';
import { ShellComponent } from './components/shell/shell.component';
import { ViewInjectPointDirective } from './directives/view-inject-point.directive'
import { UISidemodalActiveService } from './services/ui-sidemodal-active/ui-sidemodal-active.service'



@NgModule({
  declarations: [ShellComponent, ViewInjectPointDirective],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
    UISidemodalService
  ],
  entryComponents: [ShellComponent]
})
export class UISidemodalModule {}

export {
  UISidemodalService,
  UISidemodalActiveService
}
