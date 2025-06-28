import { useState } from "react";
import { Search as SearchSU } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { SEARCH_USER } from "../../../gql/user";

import UserInfo from "./UserInfo";
import "./SearchContact.css";

export default function SearchContact() {
  const [SearchUser, setSearchUser] = useState("");
  const [infoUser, setinfoUser] = useState(null);
  const [SearchContact] = useMutation(SEARCH_USER);

  const onChange = (e) => {
    if (e.target.value) setSearchUser(e.target.value);
    else setSearchUser(null);
    console.log(SearchUser);
  };

  const Submit = async (e) => {
    console.log(SearchUser);
    e.preventDefault();
    try {
      const { data } = await SearchContact({
        variables: {
          idNumber: SearchUser,
        },
      });
      console.log(data);
      setinfoUser(data.searchContact);
    } catch (error) {
      setinfoUser(null);
      console.log(error);
    }
  };

  return (
    <div className="SearchContact">
      <form action="" onSubmit={Submit}>
        <div className="search-input">
          <SearchSU
            className="search-users"
            placeholder="Numero de la persona"
            input={{ icon: "user ", iconPosition: "left" }}
            onSearchChange={onChange}
            resultRenderer={false}
          />
          {/* <i class='bx bx-search-alt-2'></i> */}
        </div>
      </form>

      {infoUser ? (
        <UserInfo infoUser={infoUser} />
      ) : (
        <div className="usernotfound">
          <span>No se a encontrado el usuario</span>
        </div>
      )}
    </div>
  );
}
