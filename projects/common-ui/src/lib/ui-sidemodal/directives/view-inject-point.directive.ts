import { Directive, OnInit, ViewContainerRef } from '@angular/core'
import { UISidemodalDataService } from '../services/ui-sidemodal-data/ui-sidemodal-data.service'

@Directive({
  selector: '[viewInjectPoint]'
})
export class ViewInjectPointDirective implements OnInit {

  constructor(
    private _vcr: ViewContainerRef,
    private _dataService: UISidemodalDataService
  ) { }

  ngOnInit() {
    this._vcr.clear()
    this._vcr.createComponent(this._dataService.componentFactory)
  }

}
