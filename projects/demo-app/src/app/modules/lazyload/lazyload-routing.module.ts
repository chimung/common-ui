import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadCompComponent } from './lazyload-comp/lazyload-comp.component'


const routes: Routes = [
  { path: 'lazy-comp', component: LazyloadCompComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadRoutingModule { }
