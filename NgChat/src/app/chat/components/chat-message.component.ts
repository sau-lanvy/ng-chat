import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../core/models/message.model';

@Component({
    selector: 'app-chat-message',
    template: `
    <div class="avatar"></div>
    <div class="text_wrapper">
      <div *ngIf="message.userName; else elseBlock" class="text">
        <strong>{{message.userName}} (at {{message.sentAt | date:"dd.MM.y"}}):</strong> {{message.content}} </div>
        <ng-template #elseBlock><div class="text">{{message}}</div></ng-template>
    </div>
    `
})

export class ChatMessageComponent implements OnInit {
    @Input() message: Message;

    constructor() { }

    ngOnInit() { }
}
