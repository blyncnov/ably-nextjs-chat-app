import React from "react";
import style from "./sendmessage.module.scss";

// Ably Hook
import { ably } from "../../hooks/ably";

const SendMessage = ({ my_messages, set_my_messages }: any) => {
  // Create Channel
  const my_voting_channel = ably.channels.get("voting-channel");

  // Subscribe to channel
  my_voting_channel.subscribe("vote", (message: any) => {
    console.table(message.data);
  });

  // Send and Publish Message
  const SendMessageHandler = async (event: any) => {
    event.preventDefault();

    const my_message = event.target.message.value;

    let newMessageValue = {
      id: Math.random().toString(),
      author: localStorage.getItem("nickname"),
      message: my_message,
    };

    await my_voting_channel.publish("vote", newMessageValue, (err: any) => {
      if (err) {
        console.log("Some Error", err);
      } else {
        console.log("Publish Successfully");
        event.target.message.value = "";
      }
    });
  };

  return (
    <>
      <div className={style.send_message_container}>
        <div className={style.chat_column}>
          <form onSubmit={SendMessageHandler}>
            <div className={style.grouped_input}>
              <input
                type="text"
                placeholder="Enter your message"
                autoFocus={true}
                autoSave="true"
                name="message"
                className={style.message_input}
                onChange={(event) => event.target.value}
              />
              <button className={style.send_button}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
