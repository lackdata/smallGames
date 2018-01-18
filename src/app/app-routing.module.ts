import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WzqComponent} from './wzq/wzq.component';

const routes: Routes = [
  {path: 'wzq', component: WzqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
