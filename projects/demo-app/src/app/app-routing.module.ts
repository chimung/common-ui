import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalSidebarComponent } from './components/main/modal-sidebar.component'


const routes: Routes = [
  { path: 'main', component: ModalSidebarComponent },
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
