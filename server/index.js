import startApolloServer from "./app.js";
import { connectDB } from "./db/db.js";
import { resolver } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

connectDB();
startApolloServer(typeDefs, resolver);
