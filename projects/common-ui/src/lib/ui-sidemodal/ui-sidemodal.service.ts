import { ComponentFactoryResolver, Injectable, Type } from '@angular/core'
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ModalConfig } from './ui-sidemodal.model'
import { ComponentPortal } from '@angular/cdk/portal'
import { ShellComponent } from './components/shell/shell.component'
import { UISidemodalDataService } from './services/ui-sidemodal-data/ui-sidemodal-data.service'
import { UISidemodalActiveService } from './services/ui-sidemodal-active/ui-sidemodal-active.service'
import { Observable } from 'rxjs'

@Injectable()
export class UISidemodalService {

  private _overlayRef: OverlayRef

  constructor(
    private _overlay: Overlay,
    private _dataService: UISidemodalDataService,
    private _activeSidebarService: UISidemodalActiveService,
    private _cfr: ComponentFactoryResolver
  ) { }

  buildConfig(config?: ModalConfig): OverlayConfig {
    return {
      hasBackdrop: true,
      disposeOnNavigation: true,
      positionStrategy: this._overlay.position().global()
    }
  }

  openModal<T>(component: Type<any>): Observable<T> {
    const overlayConfig = this.buildConfig()
    this._overlayRef = this._overlay.create(overlayConfig)

    this._dataService.componentFactory = this._cfr.resolveComponentFactory(component)
    this._activeSidebarService.setOverlayRef(this._overlayRef)
    const componentPortal = new ComponentPortal(ShellComponent)

    this._overlayRef.attach(componentPortal)
    return this._activeSidebarService.createNewResultObservable()
  }
}
