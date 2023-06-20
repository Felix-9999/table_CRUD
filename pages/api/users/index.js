import connectMongo from "../../../database/connTable"
import { getUsers, postUser, putUser, deleteUser } from "../../../database/controllerTable"

export default async function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://crud-rosy-two.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      break;
    case 'POST':
      postUser(req, res);
      break;
    case 'PUT':
      putUser(req, res);
      break;
    case 'DELETE':
      deleteUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
