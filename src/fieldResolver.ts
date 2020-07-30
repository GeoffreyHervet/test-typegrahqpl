import { Resolver, ResolverInterface, FieldResolver, Root, Ctx, Info } from 'type-graphql';
import { Foo, Category, GraphQlContext } from './types';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Category)
export default class FooResolver implements ResolverInterface<Category> {
  @FieldResolver()
  async foo(
    @Root() category: Category,
    @Ctx() context: GraphQlContext,
    @Info() info: GraphQLResolveInfo,
  ): Promise<Foo | undefined> {
    console.log({ context });
    console.log({ info });
    console.log(info.fieldNodes);
    const location = info.fieldNodes[0].selectionSet?.loc;
    const {
      start,
      end,
      source: { body },
    } = location!;
    const selectedData = body.slice(start, end);
    console.log(selectedData);

    return {
      a: 'A',
      b: 'b',
      c: 'Ç',
      d: '∂',
      e: 'X',
    };
  }
}
