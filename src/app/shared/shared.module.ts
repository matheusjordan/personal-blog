import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AvatarContainerComponent } from './components/avatar-container/avatar-container.component';
import { ButtonsContainerComponent } from './components/buttons-container/buttons-container.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { TagsContainerComponent } from './tags-container/tags-container.component';



@NgModule({
  declarations: [
    AvatarContainerComponent,
    ButtonsContainerComponent,
    ArticleContainerComponent,
    TagsContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    AvatarContainerComponent,
    ButtonsContainerComponent,
    ArticleContainerComponent,
    TagsContainerComponent
  ]
})
export class SharedModule { }
