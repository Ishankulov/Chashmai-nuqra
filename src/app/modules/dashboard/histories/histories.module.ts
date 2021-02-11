import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { HistoriesComponent } from './histories.component';


@NgModule({
  declarations: [HistoriesComponent],
  imports: [
    CommonModule,
    HistoriesRoutingModule
  ]
})
export class HistoriesModule { }
