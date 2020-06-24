import { Component, OnInit } from '@angular/core';
import { UISidemodalService } from 'ngx-common-ui'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-lazyload-comp',
  templateUrl: './lazyload-comp.component.html',
  styleUrls: ['./lazyload-comp.component.scss']
})
export class LazyloadCompComponent implements OnInit {

  constructor(
    private _sidemodalService: UISidemodalService
  ) { }

  ngOnInit() {
    this._sidemodalService.openModal(ModalComponent).subscribe()
  }

}
