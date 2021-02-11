import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAnimalsRoutingModule } from './list-animals-routing.module';
import { ListAnimalsComponent } from './list-animals.component';
import {AngularMaterialModule} from '../../../angular-material.module';


@NgModule({
  declarations: [ListAnimalsComponent],
  imports: [
    CommonModule,
    ListAnimalsRoutingModule,
    AngularMaterialModule
  ]
})
export class ListAnimalsModule { }
