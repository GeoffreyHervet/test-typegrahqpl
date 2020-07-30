import { GraphQlContext } from './types';
import { Request, Response } from 'express';

const contextBuilder = ({ req, res }: { req: Request; res: Response }): GraphQlContext => {
  console.log('build context');
  return {};
};

export default contextBuilder;
