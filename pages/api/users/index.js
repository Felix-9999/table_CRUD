import connectMongo from "../../../database/connTable"
import {getUsers, postUser, putUser,deleteUser,   } from "../../../database/controllerTable"

export default async function  handler(req, res) {
    connectMongo().catch(()=>res.status(405).json({error:"Error in the Connection"}))
   
    //type of request
    const  {method} = req
    //[GET,POST,PUT,DELETE]
   
     switch(method) {
        case "GET":
            getUsers(req,res)   
                break;
            case "POST" :
                postUser(req,res)
            break;
            case "PUT" :
                putUser(req,res)
            break;
            case "DELETE" :
                deleteUser(req,res)
            default :
            res.setHeader("Allow",["GET,POST,PUT,DELETE"])
            res.status(405).end(`Method ${method} not Allowd`)

     }
  }