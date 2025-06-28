import { useContext } from "react";
import UserNotFound from "../../../assets/png/avatar.png";
import { AuthContext } from "../../../Context/AuthContext";
import "./Header.css";

export default function Header({ handlerSide }) {
  const { auth, logout, themeTogglers } = useContext(AuthContext);
  console.log(auth);
  const handlerContact = (action) => {
    console.log(action);
    switch (action) {
      case "SearchContact":
        handlerSide("SearchContact");
        document.getElementById("sideOcult").classList.toggle("visible-side");
        break;

      case "EditProfile":
        console.log("h");
        handlerSide("EditProfile");
        document.getElementById("sideOcult").classList.toggle("visible-side");
        document.getElementById("dropdown").classList.toggle("active2");
        break;

      default:
        break;
    }
  };

  const toggleMode = () => {
    document.getElementById("switchMode").classList.toggle("active");
    themeTogglers();
  };

  return (
    <header className="header-user">
      <div className="h-info">
        <div className="h-info-img">
          <img src={auth.avatar ? auth.avatar : UserNotFound} alt="" />
        </div>
        <div className="info-user">
          <span className="h-info-name">{auth.name}</span>
          <span className="h-info-number">{auth.numberID}</span>
        </div>
      </div>
      <button class="switch" id="switchMode" onClick={toggleMode}>
        <span>
          <i class="fas fa-sun"></i>
        </span>
        <span>
          <i class="fas fa-moon"></i>
        </span>
      </button>
      <div className="h-options">
        <div className="h-info-option">
          <i
            class="bx bxs-chat"
            onClick={() => handlerContact("SearchContact")}
          ></i>
        </div>
        <div
          className="h-info-option menu-options"
          onClick={() =>
            document.getElementById("dropdown").classList.toggle("active2")
          }
        >
          <i class="bx bx-dots-vertical-rounded"></i>

          <div className="sub-menu" id="dropdown">
            <div
              className="menu-item"
              onClick={() => handlerContact("EditProfile")}
            >
              Configuracion
            </div>
            <div className="menu-item" onClick={() => logout()}>
              Cerrar Sesion
            </div>
            <div className="menu-item"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
