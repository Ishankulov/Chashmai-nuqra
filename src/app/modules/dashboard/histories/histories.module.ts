import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { HistoriesComponent } from './histories.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [HistoriesComponent],
  imports: [
    CommonModule,
    HistoriesRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class HistoriesModule { }
