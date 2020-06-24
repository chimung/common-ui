import { Component, OnInit } from '@angular/core';
import { UISidemodalService } from 'common-ui'
import { TestModalComponent } from '../../test-modal/test-modal.component'

@Component({
  selector: 'app-modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrls: ['./modal-sidebar.component.scss']
})
export class ModalSidebarComponent implements OnInit {

  constructor(
    private _modalSidebar: UISidemodalService
  ) { }

  ngOnInit() {
  }

  openModalSidebar() {
    this._modalSidebar.openModal<{ test: number }>(TestModalComponent).subscribe(res => console.log(res))
  }
}
