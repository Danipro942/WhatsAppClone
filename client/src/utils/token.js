import { jwtDecode } from "jwt-decode";
import { TOKEN } from "./contanst";

export function setToken(token) {
  const TokenRetenido = token;

  localStorage.setItem(TOKEN, TokenRetenido);
}

export function getToken() {
  const token = localStorage.getItem(TOKEN);
  console.log(token, "token");
  return token;
}

export function decodeToken(token) {
  console.log(token, "hehe");
  try {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded;
  } catch (error) {
    console.log(error);
    localStorage.removeItem(TOKEN);
    return false;
  }
}

export function removeToken() {
  localStorage.removeItem(TOKEN);
}
