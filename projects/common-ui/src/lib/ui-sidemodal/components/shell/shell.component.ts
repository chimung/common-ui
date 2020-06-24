import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ComponentType } from '@angular/cdk/overlay'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'ui-modal-sidebar-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class ShellComponent implements OnInit {

  @Input() inputView: any

  constructor(

  ) { }

  ngOnInit() {

  }

}
