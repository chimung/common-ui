import { Component, OnInit } from '@angular/core';
import { UIModalSidebarService } from 'common-ui'
import { TestModalComponent } from '../../test-modal/test-modal.component'

@Component({
  selector: 'app-modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrls: ['./modal-sidebar.component.scss']
})
export class ModalSidebarComponent implements OnInit {

  constructor(
    private _modalSidebar: UIModalSidebarService
  ) { }

  ngOnInit() {
  }

  openModalSidebar() {
    this._modalSidebar.openModal(TestModalComponent).subscribe(console.log)
  }
}
