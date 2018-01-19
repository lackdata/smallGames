import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WzqComponent} from './wzq/wzq.component';
import {SnakeComponent} from './snake/snake.component';

const routes: Routes = [
  {path: 'wzq', component: WzqComponent},
  {path: 'snake', component: SnakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
