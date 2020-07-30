import { Field, ObjectType, Int } from 'type-graphql';
export type GraphQlContext = {};

@ObjectType()
export class Foo {
  @Field()
  a: string;

  @Field()
  b: string;

  @Field()
  c: string;

  @Field()
  d: string;

  @Field()
  e: string;
}

@ObjectType()
export class Category {
  @Field()
  title: string;

  @Field(() => Foo)
  foo?: Foo;
}
