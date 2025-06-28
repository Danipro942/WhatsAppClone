import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import svgL from "./welcomeL.svg";
import svgD from "./welcomeD.svg";
import "./Welcome.css";

export default function Welcome() {
  const { theme } = useContext(AuthContext);
  const [svgW, setsvgW] = useState(null);
  useEffect(() => {
    theme === "dark" ? setsvgW(svgD) : setsvgW(svgL);
  }, [theme]);

  return (
    <div className="welcome">
      <span>
        <img src={svgW} alt="SVG as an image" />

        <h1>WhatsApp Clone</h1>
        <p>La nueva manera de comunicarte con tus amigos y seres queridos</p>

        <div className="border-botom"></div>
      </span>
    </div>
  );
}
