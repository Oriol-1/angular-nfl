import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QbComponent } from './positions/pages/qb/qb.component';
import { RbComponent } from './positions/pages/rb/rb.component';
import { WrComponent } from './positions/pages/wr/wr.component';
import { TeComponent } from './positions/pages/te/te.component';
import { KComponent } from './positions/pages/k/k.component';
import { DefComponent } from './positions/pages/def/def.component';
import { RankingComponent } from './positions/pages/ranking/ranking.component';





const routes: Routes = [
{
  path: '',
  component: RankingComponent,
  pathMatch: 'full'

},
{
  path: 'qb',
  component: QbComponent
  
},
{
  path: 'rb',
  component: RbComponent
},
{
  path: 'wr',
  component: WrComponent
},
{
  path: 'te',
  component: TeComponent
},
{
  path: 'k',
  component: KComponent
},
{
  path:'def',
  component: DefComponent
},
{
  path: '**',
  redirectTo: ''
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
