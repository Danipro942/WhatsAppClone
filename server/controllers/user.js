const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

function createToken(user, SECRET_KEY, expiresIn) {
  const { id, name, email, username, avatar, numberID } = user;
  const payload = {
    id,
    name,
    email,
    username,
    avatar,
    numberID,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

async function register(input) {
  const newUser = input;
  const { email, name, password, avatar } = newUser;

  // Revisamos si el correo ya esta en uso
  const foundEmail = await User.findOne({ email });
  if (foundEmail) throw new Error("El Email ya esta en uso");

  // Encriptando la contraseña
  const salt = await bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);
  console.log(newUser.password);
  // Generar el numero con el cual van a agragar al usuario
  function generateID() {
    var referencia = new Date();
    var id = referencia.getTime();
    return id;
  }
  const id = generateID();

  try {
    const user = new User({
      email,
      name,
      password: newUser.password,
      numberID: id,
      avatar,
    });
    user.save();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }

  return;
}

async function login(input) {
  console.log(input);
  const { email, password } = input;
  // Buscamos si el email existe
  const emailFound = await User.findOne({ email });
  console.log(emailFound);
  if (!emailFound) throw new Error("El email o la contraseña no es valido");

  // Desencriptamos la contraseña para verificarla
  console.log(password);
  const passwordFound = await bcryptjs.compare(password, emailFound.password);
  console.log(passwordFound, "si");
  if (!passwordFound) throw new Error("El email o la contraseña no es valido!");
  try {
    return {
      token: createToken(emailFound, process.env.SECRET_KEY, "24h"),
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function searchContact(idNumber, ctx) {
  if (!ctx.user) throw new Error("No estas autentificado");
  console.log(ctx, "jeje1");
  const { id } = ctx.user;

  // Verificamos si el usuario que esta haciendo la peticion existe
  const sesionValid = await User.findById(id);
  console.log(id, "yes");
  if (!sesionValid) throw new Error("El usuario no esta autentificado");

  const userFound = await User.findOne({ numberID: idNumber });
  if (!userFound) throw new Error("El usuario que buscas no existe");

  try {
    console.log(userFound, "xd nose que pasa");
    return userFound;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function updateUser(input, ctx) {
  console.log(input);

  const UserFound = await User.findById(ctx.user.id);
  const { password, avatar } = input;

  if (input.password.length < 4 && input.password.length > 0)
    throw new Error("Tu contraseña es muy corta");
  if (input.password.length >= 5) {
    const salt = await bcryptjs.genSaltSync(10);
    input.password = await bcryptjs.hash(password, salt);
  }

  if (password.length == 0) {
    input.password = UserFound.password;
  }

  if (input.avatar.length == 0) {
    input.avatar = UserFound.avatar;
  }

  try {
    console.log(input, "d");
    await User.findByIdAndUpdate(ctx.user.id, input);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  register,
  login,
  searchContact,
  updateUser,
};
