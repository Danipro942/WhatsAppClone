import { useContext, useEffect, useRef } from "react";

import TextDecorator from "./TextDecorator";
import Spinner from "../../../components/Spinner/SPNormal";
import { ChatContext } from "../../../Context/ChatContext";
import { AuthContext } from "../../../Context/AuthContext";
import getMessage from "../../../hooks/useGetMessage";
import "./Message.css";

export default function Message(e) {
  const scrollRef = useRef(null);
  useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const { data, loading } = getMessage();

  useEffect(() => {
    const chatScroll = document.querySelector("#chat-message");

    chatScroll?.scrollTo({ behavior: "smooth", top: chatScroll.scrollHeight });
  }, [data]);

  if (loading === true) return <Spinner />;
  const chatScroll = document.querySelector("#chat-message");

  setInterval(() => {
    // chatScroll?.scrollTo({ behavior: 'smooth', top:chatScroll.scrollHeight })
  }, 1000);
  console.log(chatScroll?.scrollHeight);

  return (
    <div className="chat-message" id="chat-message" ref={scrollRef}>
      <button>hola</button>

      {data.getMessage.map((e) => (
        <TextDecorator data={e} sender={auth.id === e.sender} />
      ))}
    </div>
  );
}
