import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from ".././../../gql/message";
import { ChatContext } from "../../../Context/ChatContext";
import GetMessage from "../../../hooks/useGetMessage";

import "./FormMessage.css";

export default function FormMessage() {
  const [ValueMessage, setValueMessage] = useState("");

  const [SendMessage] = useMutation(ADD_MESSAGE);

  const { chatInfo } = useContext(ChatContext);

  GetMessage();

  console.log(chatInfo._id, "vamos!!");
  console.log(ValueMessage, "vamos!!");
  const onChange = (e) => {
    setValueMessage(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await SendMessage({
        variables: {
          input: {
            conversationID: chatInfo._id,
            text: ValueMessage,
          },
        },
      });
      console.log(data);
      // refetchMessage()
      setValueMessage("");

      const chatScroll = document.querySelector("#chat-message");
      chatScroll?.scrollTo({
        behavior: "smooth",
        top: chatScroll.scrollHeight,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-message">
      <div className="options-form">
        <i class="bx bx-paperclip"></i>
      </div>
      <form onSubmit={onSubmit} className="send-message">
        <input
          type="text"
          placeholder="Escribe un mensaje aqui"
          value={ValueMessage}
          onChange={onChange}
        />

        <div className="send-message">
          <i class="bx bx-send"></i>
        </div>
      </form>
    </div>
  );
}
