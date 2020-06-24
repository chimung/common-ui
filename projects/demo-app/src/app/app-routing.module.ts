import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalSidebarComponent } from './components/main/modal-sidebar.component'


const routes: Routes = [
  { path: 'main', component: ModalSidebarComponent },
  { path: 'lazy', loadChildren: () => import('./modules/lazyload/lazyload.module').then(m => m.LazyloadModule) },
  { path: '**', redirectTo: '/lazy'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
