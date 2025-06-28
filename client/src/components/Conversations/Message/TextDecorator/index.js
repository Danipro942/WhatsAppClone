import { useEffect } from "react";

import "./TextDecorator.css";

export default function TextDecorator({ data, sender }) {
  useEffect(() => {}, []);

  // if(scrollChat === null ) return null
  console.log(sender);

  return (
    <div
      className="conversationtext"
      style={sender ? { "justify-content": "flex-end" } : null}
    >
      <div className={sender ? "text own" : "text"}>
        <p>{data.text}</p>
      </div>
    </div>
  );
}
