import { Query, Resolver } from 'type-graphql';
import { Category } from './types';

@Resolver()
export default class CategoryResolver {
  @Query(() => [Category], { name: 'recipes' })
  categories(): [Category] {
    return [
      {
        title: 'My title',
      },
    ];
  }
}
