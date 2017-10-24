import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './containers/page-not-found';

import { ChatService } from './services/chat.service';

export const COMPONENTS = [
  PageNotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [ChatService]
})
export class CoreModule { }
