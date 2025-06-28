import { useMutation } from "@apollo/client";
import { ADD_CHAT } from "../../../../gql/chat";
import useGetChat from "../../../../hooks/useGetChat";

import "./UserInfo.css";

export default function UserInfo({ infoUser }) {
  const [AddChat] = useMutation(ADD_CHAT);

  const { refetchChats } = useGetChat();

  const writeUser = async () => {
    try {
      const { data } = await AddChat({
        variables: {
          idNumber: infoUser.numberID,
        },
      });
      refetchChats();
      console.log(data.message);
      document.getElementById("sideOcult").classList.remove("visible-side");
      console.log(data);
    } catch (error) {
      if (error.message === "chatExisting") {
        document.getElementById("sideOcult").classList.remove("visible-side");
      }
    }
  };

  return (
    <div className="userInfo">
      <div className="avatarUser">
        <img src={infoUser.avatar} alt="" />
      </div>
      <div className="i-info-search">
        <span>{infoUser.name}</span>
        <span>{infoUser.numberID}</span>
      </div>

      <div className="buttons-user-info">
        <button className="write-button" onClick={writeUser}>
          Escribir
        </button>
        <button className="add-contact-button">Agregar Contacto</button>
      </div>
    </div>
  );
}
