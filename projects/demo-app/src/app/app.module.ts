import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UISidemodalModule } from 'ngx-common-ui';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ModalSidebarComponent } from './components/main/modal-sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent,
    ModalSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UISidemodalModule
  ],
  entryComponents: [
    TestModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
