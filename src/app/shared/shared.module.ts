import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarContainerComponent } from './components/avatar-container/avatar-container.component';
import { IonicModule } from '@ionic/angular';
import { ButtonsContainerComponent } from './components/buttons-container/buttons-container.component';



@NgModule({
  declarations: [
    AvatarContainerComponent,
    ButtonsContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AvatarContainerComponent,
    ButtonsContainerComponent
  ]
})
export class SharedModule { }
