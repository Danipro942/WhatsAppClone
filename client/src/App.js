import "./App.css";
import Auth from "./Pages/Auth";

import Navigation from "./Routes/Navigation";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import AuthContext from "./Context/AuthContext";
import { ChatProvider } from "./Context/ChatContext";
import { getToken, decodeToken, removeToken } from "./utils/token";
import { useEffect, useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyled } from "./Theme/theme";
import Spinner from "./components/Spinner/SPNormal";
import { setThemeStorage, getTheme } from "./utils/themeStorage";
import { ToastContainer } from "react-toastify";

const StyleApp = styled.div``;

function App() {
  const token = getToken();
  const [auth, setAuth] = useState(undefined);
  const [theme, setTheme] = useState("");

  const themeTogglers = () => {
    if (getTheme() === "dark") {
      console.log(getTheme());

      setThemeStorage("light");
      setTheme("light");
    } else {
      console.log(getTheme());
      setThemeStorage("dark");
      setTheme("dark");
    }
  };

  const logout = () => {
    removeToken();
    setAuth(undefined);
  };

  useEffect(() => {
    console.log(getTheme());
    if (!getTheme()) {
      setThemeStorage("light");
    } else {
      setTheme(getTheme());
    }

    if (!token) {
      setAuth(null);
    } else {
      setAuth(decodeToken(token));
    }
  }, [token]);

  const authData = useMemo(
    () => ({
      auth,
      setAuth,
      logout,
      themeTogglers,
      theme,
    }),
    [auth, theme]
  );

  if (auth === undefined) return <Spinner />;

  return (
    <AuthContext.Provider value={authData}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyled />
        <ChatProvider>
          <ApolloProvider client={client}>
            <StyleApp>
              <div className="App">{auth ? <Navigation /> : <Auth />}</div>
            </StyleApp>
          </ApolloProvider>
        </ChatProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
