import { useState, useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { UPDATE_USER } from "../../../gql/user";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext";

import "./EditProfile.css";

export default function EditProfile() {
  const { auth, logout } = useContext(AuthContext);
  const { name, avatar } = auth;

  const [update_user] = useMutation(UPDATE_USER);

  const [dateForm, setdateForm] = useState({
    name,
    avatar,
    password: "",
  });

  const inputPassword = document.getElementById("password");
  const inputName = document.getElementById("name");

  const inputAvatar = document.getElementById("avatar");

  if (inputAvatar?.getAttribute("error") === null) {
    inputAvatar.classList.remove("error-input");
  } else {
    inputAvatar?.classList.add("error-input");
  }

  if (inputName?.getAttribute("error") === null) {
    inputName.classList.remove("error-input");
  } else {
    inputName?.classList.add("error-input");
  }

  // Verificar si hay un error en un input de username

  if (inputPassword?.getAttribute("error") === null) {
    inputPassword.classList.remove("error-input");
  } else {
    inputPassword?.classList.add("error-input");
  }

  const handleChanges = (e) => {
    console.log("si");
    setdateForm({ ...dateForm, [e.target.name]: e.target.value });
  };

  const formik = useFormik({
    initialValues: dateForm,
    validationSchema: Yup.object({
      avatar: Yup.string(),
      password: Yup.string(),
      name: Yup.string().required(),
    }),
    onSubmit: async (formData) => {
      try {
        console.log(dateForm);
        const { data } = await update_user({
          variables: {
            input: dateForm,
          },
        });
        console.log(data);
        toast.success("Se a actualizado tu perfil exitosamente");
        setTimeout(() => {
          logout();
        }, 1000);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    },
  });

  return (
    <form action="" class="auth-profile">
      <img src={dateForm.avatar} alt="" className="avatarUser" />
      <input
        name="avatar"
        id="avatar"
        type="text"
        placeholder="Avatar (Colocar URL de la imagen)"
        value={formik.values.email}
        onChange={handleChanges}
        error={formik.errors.email}
      />
      <input
        name="name"
        autoComplete="off"
        id="name"
        type="text"
        placeholder="Nombre"
        value={dateForm.name}
        onChange={handleChanges}
        error={formik.errors.name}
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
      <button type="button" class="f-submit" onClick={formik.handleSubmit}>
        Actualizar
      </button>
    </form>
  );
}
