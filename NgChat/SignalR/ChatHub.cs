using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NgChat.SignalR
{
    public class ChatHub : Hub
    {
      public void Send(string message)
      {
        // Call the broadcastMessage method to update clients.
        Clients.All.InvokeAsync("Send", message);
      }
    }
}
