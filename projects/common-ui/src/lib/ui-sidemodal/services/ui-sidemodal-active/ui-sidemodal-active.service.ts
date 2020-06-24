import { Injectable } from '@angular/core'
import { OverlayRef } from '@angular/cdk/overlay'
import { Observable, Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class UISidemodalActiveService {
  private _overlayRef: OverlayRef
  private _result$

  constructor() { }

  setOverlayRef(ref: OverlayRef) {
    this._overlayRef = ref
  }

  createNewResultObservable<T>(): Observable<T> {
    this._result$ = new Subject<T>()
    return this._result$.asObservable()
  }

  close(data = null) {
    this._overlayRef.detach()
    this._result$.next(data)
    this._result$.complete()
    this._result$.unsubscribe()
  }

  dismiss() {
    this._overlayRef.detach()
    this._result$.next({ reason: 'dismiss' })
    this._result$.complete()
    this._result$.unsubscribe()
  }
}
