import { Router } from 'express';

const exampleRouter = Router();

/* nome do recurso deve está no plural */

exampleRouter.get('/', (request, response) =>
  response.json({ message: 'rota teste de exampleRouter' }),
);

export default exampleRouter;
