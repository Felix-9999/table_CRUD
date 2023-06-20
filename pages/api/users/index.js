// api/users/index.js

import connectMongo from "../../../database/connTable"
import { getUsers, postUser, putUser, deleteUser } from "../../../database/controllerTable"
import Cors from 'cors';

const cors = Cors({
  origin: 'https://crud-rosy-two.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

export default async function handler(req, res) {
  await cors(req, res); // Use CORS middleware

  connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));

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
