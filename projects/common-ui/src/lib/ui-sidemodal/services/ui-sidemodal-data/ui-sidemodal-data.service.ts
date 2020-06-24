import { ComponentFactory, Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class UISidemodalDataService {
  componentFactory: ComponentFactory<any>

  constructor() { }
}
