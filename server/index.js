const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".env" });
console.log(process.env.BBDD);

mongoose.connect(
  `mongodb://${process.env.MONGO_KEY}@apirestp-shard-00-00.f0mla.mongodb.net:27017,apirestp-shard-00-01.f0mla.mongodb.net:27017,apirestp-shard-00-02.f0mla.mongodb.net:27017/whatsapp-clone?ssl=true&replicaSet=atlas-50f6oe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ApiRestP`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, _) => {
    if (err) {
      console.log("Error de conexion", err);
    } else {
      server();
    }
  }
);

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization;
      if (token) {
        try {
          const user = jwt.verify(
            token.replace("Bearer ", ""),
            process.env.SECRET_KEY
          );

          return { user };
        } catch (error) {
          console.log("#### ERROR ####");
          console.log(error);
          throw new Error("Token invalido");
          return false;
        }
      }
    },
  });

  serverApollo.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log("#################################");

    console.log(`Servidor listo en la url ${url}`);

    console.log("#################################");
  });
}
