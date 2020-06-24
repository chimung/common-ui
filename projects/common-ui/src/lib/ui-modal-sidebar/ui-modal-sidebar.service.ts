import { Component, Injectable, TemplateRef, Type } from '@angular/core'
import { ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ModalConfig, ModalResultModel } from './ui-modal-sidebar.model'
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal'
import { ShellComponent } from './components/shell/shell.component'
import { UISidemodalDataService } from './services/ui-sidemodal-data/ui-sidemodal-data.service'
import { UISidemodalActiveService } from './services/ui-sidemodal-active/ui-sidemodal-active.service'
import { Observable } from 'rxjs'

@Injectable()
export class UIModalSidebarService {

  private _overlayConfig: OverlayConfig
  private _overlayRef: OverlayRef

  constructor(
    private _overlay: Overlay,
    private _dataService: UISidemodalDataService,
    private _activeSidebarService: UISidemodalActiveService
  ) { }

  buildConfig(config?: ModalConfig): OverlayConfig {
    return {
      hasBackdrop: true,
      disposeOnNavigation: true,
      positionStrategy: this._overlay.position().global()
    }
  }

  openModal(component: Type<any>): Observable<ModalResultModel> {
    const overlayConfig = this.buildConfig()
    this._overlayRef = this._overlay.create(overlayConfig)

    this._dataService.inputView = component
    this._activeSidebarService.setOverlayRef(this._overlayRef)
    const componentPortal = new ComponentPortal(ShellComponent)

    this._overlayRef.attach(componentPortal)
    return this._activeSidebarService.createNewResultObservable()
  }
}
