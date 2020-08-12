import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarContainerComponent } from './components/avatar-container/avatar-container.component';
import { IonicModule } from '@ionic/angular';
import { ButtonsContainerComponent } from './components/buttons-container/buttons-container.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';



@NgModule({
  declarations: [
    AvatarContainerComponent,
    ButtonsContainerComponent,
    ArticleContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AvatarContainerComponent,
    ButtonsContainerComponent,
    ArticleContainerComponent,
  ]
})
export class SharedModule { }
