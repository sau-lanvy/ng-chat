import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat-nav',
    template: `
    <div class="top_menu">
        <div class="buttons">
            <div class="button close"></div>
            <div class="button minimize"></div>
            <div class="button maximize"></div>
        </div>
        <div class="title">A Simple Chat Box with Angular CLI and SignalR</div>
    </div>
    `,
    styles: [`
    .top_menu {
        background-color: #fff;
        width: 100%;
        padding: 20px 0 15px;
        box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
      }
      .top_menu .buttons {
        margin: 3px 0 0 20px;
        position: absolute;
      }
      .top_menu .buttons .button {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 10px;
        position: relative;
      }
      .top_menu .buttons .button.close {
        background-color: #f5886e;
      }
      .top_menu .buttons .button.minimize {
        background-color: #fdbf68;
      }
      .top_menu .buttons .button.maximize {
        background-color: #a3d063;
      }
      .top_menu .title {
        text-align: center;
        color: #bcbdc0;
        font-size: 20px;
      }
    `]
})

export class ChatNavComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}