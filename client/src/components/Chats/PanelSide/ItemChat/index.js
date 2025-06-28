import { useState, useContext, useEffect } from "react";
import UserNotFound from "../../../../assets/png/avatar.png";
import { useMutation } from "@apollo/client";
import { SEARCH_USER } from "../../../../gql/user";

import "./ItemChat.css";
import { ChatContext } from "../../../../Context/ChatContext";
import { AuthContext } from "../../../../Context/AuthContext";
import { useMemo } from "react";

export default function ItemChat({ data, selectChat }) {
  // console.log(data)

  const [InfoUser, setInfoUser] = useState(null);

  const [SearchContact] = useMutation(SEARCH_USER);

  const { auth } = useContext(AuthContext);

  const numberID = auth.numberID;

  const { setUserSelect, setChatSelect } = useContext(ChatContext);

  const filterID = useMemo(
    () => data.members.filter((e) => e !== numberID),
    [data.members, numberID]
  );
  console.log(filterID[0]);

  const chatSelect = () => {
    setUserSelect(InfoUser);
    setChatSelect(data);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await SearchContact({
          variables: {
            idNumber: filterID[0],
          },
        });
        console.log(data);
        setInfoUser(data.searchContact);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [SearchContact, filterID]);

  console.log(InfoUser);
  if (InfoUser === null) return null;
  return (
    <div
      className="item-chat "
      onClick={(e) => {
        chatSelect();
        selectChat(e);
      }}
    >
      <div className="logo-cell">
        <img src={InfoUser ? InfoUser.avatar : UserNotFound} alt="" />
      </div>

      <div className="item-c-info">
        <span className="user-name">{InfoUser.name} </span>
        <span className="user-chat">Hola amigo como estas :D</span>
      </div>
    </div>
  );
}
