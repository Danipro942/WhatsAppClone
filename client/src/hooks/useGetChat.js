import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHATS } from "../gql/chat";

export default function useChat() {
  const [listChat, setlistChat] = useState({ getChat: [] });

  const { data, loading, refetch } = useQuery(GET_CHATS, { variables: {} });

  const refetchChats = () => {
    refetch();
  };

  useEffect(() => {
    setlistChat(data);
    console.log(data);
  }, [loading, data]);

  console.log(loading);
  console.log(data, "si :D");

  return { listChat, loading, refetchChats };
}
