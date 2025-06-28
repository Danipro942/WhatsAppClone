import { useState } from "react";
import logo from "../../assets/png/logo-wp.png";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import "./Auth.css";

export default function Auth() {
  const [changeAuth, setChangeAuth] = useState(true);

  return (
    <div class="Auth">
      <img src={logo} alt="Logo de WhatsApp " />
      <div className="form">
        {changeAuth ? <Login /> : <Register changeAuth={setChangeAuth} />}

        <div class="change-form">
          <span onClick={() => setChangeAuth(!changeAuth)}>
            {changeAuth ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
          </span>
        </div>
      </div>

      <footer class="footer-auth">
        <span>Daniel Hinestroza</span>
        <span>&copy; 2020 copyright all right reserved</span>
      </footer>
    </div>
  );
}
