import { Injectable } from '@angular/core'
import { OverlayRef } from '@angular/cdk/overlay'
import { Observable, Subject } from 'rxjs'
import { ModalResultModel } from '../../ui-modal-sidebar.model'

@Injectable()
export class UISidemodalActiveService {
  private _overlayRef: OverlayRef
  private _result$: Subject<ModalResultModel>

  constructor() { }

  setOverlayRef(ref: OverlayRef) {
    this._overlayRef = ref
  }

  createNewResultObservable(): Observable<ModalResultModel> {
    this._result$ = new Subject<ModalResultModel>()
    return this._result$.asObservable()
  }

  close() {
    this._overlayRef.detach()
    this._result$.next()
    this._result$.complete()
    this._result$.unsubscribe()
  }

  dismiss() {
    this._overlayRef.detach()
    this._result$.next()
    this._result$.complete()
    this._result$.unsubscribe()
  }
}
