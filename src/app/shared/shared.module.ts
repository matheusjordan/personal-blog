import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarContainerComponent } from './components/avatar-container/avatar-container.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AvatarContainerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AvatarContainerComponent
  ]
})
export class SharedModule { }
