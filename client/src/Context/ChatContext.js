import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [userSelect, setUserSelect] = useState([]);
  const [chatInfo, setChatSelect] = useState(null);

  return (
    <ChatContext.Provider
      value={{ userSelect, setUserSelect, setChatSelect, chatInfo }}
    >
      {children}
    </ChatContext.Provider>
  );
};
