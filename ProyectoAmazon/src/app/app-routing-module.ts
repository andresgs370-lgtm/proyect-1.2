import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Kindlecomponent} from './components/kindlecomponent/kindlecomponent';
import {Paginaprincipalcomponent} from './components/paginaprincipalcomponent/paginaprincipalcomponent';
import {Ventascomponent} from './components/ventascomponent/ventascomponent';
import {Musicacomponent} from './components/musicacomponent/musicacomponent';
import {Logincomponent} from './components/logincomponent/logincomponent';
import {Fastvideocomponent} from './components/fastvideocomponent/fastvideocomponent';
import {Iacomponent} from './components/iacomponent/iacomponent';
const routes: Routes = [
  {path: '', component: Paginaprincipalcomponent},
  {path: 'ventas', component: Ventascomponent},
  {path: 'music', component: Musicacomponent},
  {path: 'login', component: Logincomponent},
  {path: 'video' , component: Fastvideocomponent},
  {path: 'ia', component: Iacomponent},
  {path: 'kindle', component: Kindlecomponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
