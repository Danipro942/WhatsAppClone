import * as Yup from "yup";
import { useFormik } from "formik";
import { REGISTER } from "../../../gql/user";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export default function Register({ changeAuth }) {
  const [register] = useMutation(REGISTER);

  const inputPassword = document.getElementById("password");
  const inputName = document.getElementById("name");

  const inputEmail = document.getElementById("email");

  if (inputEmail?.getAttribute("error") === null) {
    inputEmail.classList.remove("error-input");
  } else {
    inputEmail?.classList.add("error-input");
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

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      name: Yup.string().required(),
    }),
    onSubmit: async (formData) => {
      try {
        await register({
          variables: {
            input: formData,
          },
        });

        toast.success("Te haz registrado correctamente");
        changeAuth(true);
      } catch (error) {
        console.log(error);
        toast.error("No te haz podido registrar");
      }
    },
  });

  return (
    <form action="" class="auth-form" onSubmit={formik.handleSubmit}>
      <h2>Registarte y conoce un nuevo mundo</h2>
      <input
        name="email"
        id="email"
        type="text"
        placeholder="Correo Electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Nombre"
        value={formik.values.name}
        onChange={formik.handleChange}
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
      <button type="submit" class="f-submit">
        Registrarse
      </button>
    </form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
    name: "",
  };
}
