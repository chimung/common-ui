import { Component, OnInit } from '@angular/core';
import { UISidemodalActiveService } from 'ngx-common-ui'

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {

  constructor(
    private _activeModal: UISidemodalActiveService
  ) { }

  ngOnInit() {
  }

  close() {
    this._activeModal.close(null)
  }

}
