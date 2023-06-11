import connectMongo from "../../../database/connTable"
import { getUsers, postUser, putUser, deleteUser } from "../../../database/controllerTable"

export default async function handler(req, res) {
  try {
    await connectMongo(); // Await the completion of connectMongo function

    // type of request
    const { method } = req

    switch (method) {
      case 'GET':
        getUsers(req, res)
        break;
      case 'POST':
        postUser(req, res)
        break;
      case 'PUT':
        putUser(req, res)
        break;
        case "DELETE" :
          deleteUser(req,res)
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`)
        break;
    }
  } catch (error) {
    res.status(500).json({ error: "Error in the Connection" });
  }
}
