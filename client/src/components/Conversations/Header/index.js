import { useContext } from "react";
import UserNotFound from "../../../assets/png/avatar.png";
import { ChatContext } from "../../../Context/ChatContext";

import "./Header.css";

export default function Header() {
  const { userSelect } = useContext(ChatContext);

  return (
    <header className="h-conversation">
      <div className="avatar-user avatar">
        <img
          src={userSelect.avatar ? userSelect.avatar : UserNotFound}
          alt="Foto de perfil del usuario"
        />
      </div>
      <div className="info-user">
        <span>{userSelect.name}</span>
        <span>{userSelect.numberID}</span>
      </div>
      <div className="h-info-option menu-options">
        <i class="bx bx-dots-vertical-rounded"></i>
      </div>
    </header>
  );
}
