import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MESSAGE } from "../gql/message";

import { ChatContext } from "../Context/ChatContext";

export default function GetMessage() {
  const { userSelect } = useContext(ChatContext);
  console.log(userSelect);

  const { chatInfo } = useContext(ChatContext);

  const { data, loading, refetch, startPolling, stopPolling } = useQuery(
    GET_MESSAGE,
    {
      variables: {
        conversationId: chatInfo._id,
      },
    }
  );

  const refetchMessage = () => {
    refetch();
  };

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  return { data, loading, refetchMessage };
}
