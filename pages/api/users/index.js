import connectMongo from '../../../database/connTable';
import { getUsers, postUser, putUser, deleteUser } from '../../../database/controllerTable';

export default async function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({ error: 'Error in the Connection' }));

  // type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      return corsMiddleware(req, res, () => getUsers(req, res));
    case 'POST':
      return corsMiddleware(req, res, () => postUser(req, res));
    case 'PUT':
      return corsMiddleware(req, res, () => putUser(req, res));
    case 'DELETE':
      return corsMiddleware(req, res, () => deleteUser(req, res));
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}