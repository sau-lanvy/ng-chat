using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NgChat.Models
{
    public class Message
    {
      public int Id { get; set; }
      public string UserName { get; set; }
      public string Content { get; set; }
      public DateTime SentAt { get; set; }
    }
}
