import 'rxjs/add/operator/map';

import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/rx';

import { HubConnection } from '@aspnet/signalr-client';
import { Message } from '../models/message.model';

@Injectable()
export class ChatService {
    private _hubConnection: HubConnection;
    messageReceived: Subject<Message> = new Subject<Message>();

    connectionEstablished = new EventEmitter<Boolean>();

    constructor() {
        this.init();
    }

    send(message: Message): any {
        this._hubConnection.invoke('Send', message);
        return message;
    }

    joinGroup(userName: string, group: string): void {
        this._hubConnection.invoke('JoinGroup', userName, group);
    }

    leaveGroup(userName: string, group: string): void {
        this._hubConnection.invoke('LeaveGroup', userName, group);
    }

    private init() {
        this._hubConnection = new HubConnection('/chat');

        this._hubConnection.on('Send', (message: Message) => {
           this.messageReceived.next(message);
        });

        this._hubConnection.on('JoinGroup', (userName: string, data: string) => {
            console.log('recieved data from the hub');
            console.log(data);
        });

        this._hubConnection.on('LeaveGroup', (userName: string, data: string) => {
            console.log('leave from the hub');
        });

        this._hubConnection.start()
            .then(() => {
                console.log('Hub connection started');
                this.connectionEstablished.emit(true);
            })
            .catch(err => {
                console.log('Error while establishing connection');
        });
    }
}
