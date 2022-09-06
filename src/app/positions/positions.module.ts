import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { QbComponent } from './pages/qb/qb.component';
import { RbComponent } from './pages/rb/rb.component';
import { WrComponent } from './pages/wr/wr.component';
import { TeComponent } from './pages/te/te.component';
import { KComponent } from './pages/k/k.component';
import { DefComponent } from './pages/def/def.component';
import { RankingComponent } from './pages/ranking/ranking.component';




@NgModule({
  declarations: [
    QbComponent,
    RbComponent,
    WrComponent,
    TeComponent,
    KComponent,
    DefComponent,
    RankingComponent
  ],
  exports: [
    QbComponent,
    RbComponent,
    WrComponent,
    TeComponent,
    KComponent,
    DefComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PositionsModule { }
