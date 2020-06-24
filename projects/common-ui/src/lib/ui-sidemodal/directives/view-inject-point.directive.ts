import { ComponentFactoryResolver, Directive, OnInit, ViewContainerRef } from '@angular/core'
import { UISidemodalDataService } from '../services/ui-sidemodal-data/ui-sidemodal-data.service'

@Directive({
  selector: '[viewInjectPoint]'
})
export class ViewInjectPointDirective implements OnInit {

  constructor(
    private _cfr: ComponentFactoryResolver,
    private _vcr: ViewContainerRef,
    private _dataService: UISidemodalDataService
  ) { }

  ngOnInit() {
    const componentFactory = this._cfr.resolveComponentFactory(this._dataService.inputView)
    this._vcr.clear()

    const componentRef = this._vcr.createComponent(componentFactory)
  }

}
