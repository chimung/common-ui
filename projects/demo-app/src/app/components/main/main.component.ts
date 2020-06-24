import { Component, OnInit } from '@angular/core';
import { UIModalSidebarService } from 'common-ui'
import { TestModalComponent } from '../../test-modal/test-modal.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private _modalSidebar: UIModalSidebarService
  ) { }

  ngOnInit() {
  }

  openModalSidebar() {
    this._modalSidebar.openModal(TestModalComponent)
  }
}
