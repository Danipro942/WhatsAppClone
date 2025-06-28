import React, { useState } from "react";
import Header from "../../components/Sidebar/Header";
import SearchList from "../../components/Sidebar/SearchList";
import PanelSide from "../../components/Chats/PanelSide";
import SideOcult from "../../components/Sidebar/SideOcult";
import SearchContact from "../../components/Sidebar/SearchContact";
import EditProfile from "../../components/Sidebar/EditPerfile";

import "./Sidebar.css";

export default function Sidebar({ children }) {
  const [childrenSide, setchildrenSide] = useState(null);
  const [titleSide, setTitleSide] = useState("");

  const handlerSide = (type) => {
    console.log("hola");
    switch (type) {
      case "SearchContact":
        setTitleSide("Agregar Contacto");
        setchildrenSide(<SearchContact />);
        break;

      case "EditProfile":
        setTitleSide("Editar Perfil");
        setchildrenSide(<EditProfile />);
        break;

      case "":
        break;

      default:
        break;
    }
  };
  console.log(children);

  return (
    <div className="main">
      <div className="sidebar">
        <Header handlerSide={handlerSide} />
        <SearchList />
        <PanelSide />
        <SideOcult titleSide={titleSide} childrenSide={childrenSide} />
      </div>
      {children}
    </div>
  );
}
