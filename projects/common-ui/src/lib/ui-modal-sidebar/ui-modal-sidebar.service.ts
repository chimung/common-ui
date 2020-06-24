import { Component, Injectable, TemplateRef } from '@angular/core'
import { ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ModalConfig } from './ui-modal-sidebar.model'
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal'

@Injectable()
export class UIModalSidebarService {

  private _overlayConfig: OverlayConfig
  private _overlayRef: OverlayRef

  constructor(
    private _overlay: Overlay
  ) { }

  buildConfig(config?: ModalConfig): OverlayConfig {
    return {
      hasBackdrop: true,
      disposeOnNavigation: true,
      positionStrategy: this._overlay.position().global()
    }
  }

  openModal(template: TemplateRef<any>)
  openModal(component: ComponentType<any>)
  openModal(data: ComponentType<any> | TemplateRef<any> ) {
    const overlayConfig = this.buildConfig()
    this._overlayRef = this._overlay.create(overlayConfig)

    let ref
    if (data instanceof TemplateRef) {
      ref = new TemplatePortal(data, null)
    } else {
      ref = new ComponentPortal(data)
    }

    this._overlayRef.attach(ref)
  }
}
