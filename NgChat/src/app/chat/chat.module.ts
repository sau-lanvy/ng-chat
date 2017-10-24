import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { ChatComponent } from './containers/chat.component';
import { ChatMessageComponent } from './components/chat-message.component';
import { ChatNavComponent } from './components/chat-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: ChatComponent },
    ])
  ],
  declarations: [ChatComponent, ChatMessageComponent, ChatNavComponent]
})
export class ChatModule { }
