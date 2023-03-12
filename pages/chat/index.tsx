import React from "react";

// Ably Hook
import { ably } from "../../hooks/ably";

// Styling
import style from "./chat.module.scss";

// Custom Components
import ChatAreana from "@/components/chatArena";
import SendMessage from "@/components/sendMessage";

const ChatPlatform = () => {
  const [my_messages, set_my_messages] = React.useState([]);
  return (
    <div>
      <div className={style.chat_grid_container}>
        <div className={style.chat_presence}>
          <h4>Online User</h4>
        </div>
        <div className={style.quiz_container_section}>
          <ChatAreana
            my_messages={my_messages}
            set_my_messages={set_my_messages}
          />
          <SendMessage
            my_messages={my_messages}
            set_my_messages={set_my_messages}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPlatform;
