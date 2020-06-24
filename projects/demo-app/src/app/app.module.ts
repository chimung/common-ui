import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UIModalSidebarModule } from 'common-ui';
import { TestModalComponent } from './test-modal/test-modal.component';
import { MainComponent } from './components/main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIModalSidebarModule.forRoot()
  ],
  entryComponents: [
    TestModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
