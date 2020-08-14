import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class HomeModule { }
