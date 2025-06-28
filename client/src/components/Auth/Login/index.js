import { useContext } from "react";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LOGIN } from "../../../gql/user";
import { AuthContext } from "../../../Context/AuthContext";

import { setToken, decodeToken } from "../../../utils/token";
export default function Login() {
  const { setAuth } = useContext(AuthContext);

  const [login] = useMutation(LOGIN);

  const inputPassword = document.getElementById("password");

  const inputEmail = document.getElementById("email");
  console.log(inputEmail?.getAttribute("error"));

  // Verificar si hay un error en un input de username

  if (inputEmail?.getAttribute("error") === null) {
    inputEmail.classList.remove("error-input");
  } else {
    inputEmail?.classList.add("error-input");
  }

  // Verificar si hay un error en un input de username

  if (inputPassword?.getAttribute("error") === null) {
    inputPassword.classList.remove("error-input");
  } else {
    inputPassword?.classList.add("error-input");
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (formData) => {
      try {
        const { data } = await login({
          variables: {
            input: formData,
          },
        });
        setToken(data.login.token);

        setAuth(decodeToken(data.login.token));

        console.log(data.login.token);
      } catch (error) {}
    },
  });

  return (
    <form action="" class="auth-form" onSubmit={formik.handleSubmit}>
      <h2>Entra para hablar con tus amigos</h2>
      <input
        autoComplete="on"
        id="email"
        name="email"
        type="email"
        placeholder="Correo Electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <button type="submit" class="f-submit">
        Iniciar Sesion
      </button>
    </form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}
