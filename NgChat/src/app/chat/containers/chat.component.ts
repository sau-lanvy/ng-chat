import { Component, OnInit, NgZone, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { HubConnection } from '@aspnet/signalr-client';

import { ChatService } from '../../core/services/chat.service';
import { AuthService } from '../../auth/services/auth.service';

import { Message } from '../../core/models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private _hubConnection: HubConnection;
  public async: any;
  currentMessage: Message;
  allMessages: Message[];
  canSendMessage: boolean;

  groupName: string;
  userName: string;

  constructor(private chatService: ChatService, private authService: AuthService,
     private _ngZone: NgZone, public el: ElementRef) {
    this.groupName = 'CHAT';
    this.userName = this.authService.currentUser.name;

    this.chatService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
      if (this.userName !== undefined) {
        this.chatService.joinGroup(this.userName, this.groupName);
      }
    });

    this.chatService.messageReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
          this.currentMessage = new Message();
          this.allMessages.push(message);
          this.scrollToBottom();
      });
  });

    this.currentMessage = new Message();
    this.canSendMessage = false;
    this.allMessages = [];
  }

  ngOnInit() {
  }

  public sendMessage($event): void {
    if (this.canSendMessage) {
      this.currentMessage.sentAt = new Date();
      this.currentMessage.userName = this.userName;

      this.chatService.send(this.currentMessage);
    }
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

}
