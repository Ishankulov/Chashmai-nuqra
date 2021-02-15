import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAnimalsRoutingModule } from './list-animals-routing.module';
import { ListAnimalsComponent } from './list-animals.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [ListAnimalsComponent],
  imports: [
    CommonModule,
    ListAnimalsRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ListAnimalsModule { }
