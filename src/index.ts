import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import Resolver from './resolver';
import FieldResolver from './fieldResolver';
import context from './context';

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [Resolver, FieldResolver],
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    context,
    playground: process.env.NODE_ENV === 'development',
    debug: process.env.NODE_ENV === 'development',
    tracing: process.env.NODE_ENV === 'development',
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
