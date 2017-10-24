using Microsoft.AspNetCore.SignalR;
using NgChat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NgChat.Hubs
{
    public class ChatHub : Hub
    {
      public override async Task OnConnectedAsync()
      {
          await Clients.All.InvokeAsync("Send", $"{Context.ConnectionId} joined");
      }

      public override async Task OnDisconnectedAsync(Exception ex)
      {
          await Clients.All.InvokeAsync("Send", $"{Context.ConnectionId} left");
      }

      public Task Send(Message message)
      {
          return Clients.All.InvokeAsync("Send", message);
      }

      public Task SendToGroup(string groupName, Message message)
      {
          return Clients.Group(groupName).InvokeAsync("Send", message);
      }

      public async Task JoinGroup(string userName, string groupName)
      {
          await Groups.AddAsync(Context.ConnectionId, groupName);

          await Clients.Group(groupName).InvokeAsync("Send", $"{userName} joined {groupName}");
      }

      public async Task LeaveGroup(string userName, string groupName)
      {
          await Groups.RemoveAsync(Context.ConnectionId, groupName);

          await Clients.Group(groupName).InvokeAsync("Send", $"{userName} left {groupName}");
      }
    }
}
