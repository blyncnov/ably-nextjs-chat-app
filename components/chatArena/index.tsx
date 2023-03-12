import React, { useEffect } from "react";
import style from "./chatarea.module.scss";

// Ably Hook
import { ably } from "../../hooks/ably";
import { Types } from "ably";

const ChatAreana = ({ my_messages, set_my_messages }: any) => {
  // Create Channel
  const my_voting_channel = ably.channels.get("voting-channel");

  useEffect(() => {
    my_voting_channel.attach();
    my_voting_channel.once("attached", () => {
      my_voting_channel.history(
        (err, page: Types.PaginatedResult<Types.Message> | undefined | any) => {
          const historyMessages: Types.Message[] | undefined = Array.from(
            page.items,
            (item: Types.Message) => item.data
          );
          console.log(historyMessages);
          set_my_messages(historyMessages);

          // Subscribe to channel
          my_voting_channel.subscribe("vote", (message: Types.Message) => {
            // Push New Message
            console.log(message);
          });
        }
      );
    });
  });

  return (
    <>
      <div className={style.chat_arena_container}>
        <li>You joined this chat</li>
        <br />
        <div className={style.chat_arena_message_grid}>
          {my_messages.map((data: any, index: any) => {
            return (
              <div className={style.single_chat} key={index}>
                <div className={style.msg}>
                  <h6>Sent by : {data.author}</h6>
                  <li> {data.message}</li>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChatAreana;
