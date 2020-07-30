import { Resolver, ResolverInterface, FieldResolver, Root, Ctx } from 'type-graphql';
import { Foo, Category, GraphQlContext } from './types';

@Resolver(() => Category)
export default class FooResolver implements ResolverInterface<Category> {
  @FieldResolver()
  async foo(@Root() category: Category, @Ctx() context: GraphQlContext): Promise<Foo | undefined> {
    console.log({ context });
    return {
      a: 'A',
      b: 'b',
      c: 'Ç',
      d: '∂',
      e: 'X',
    };
  }
}
