// Controller
import Users from "../model/tableSchema"
 
// GET:http://localhost:3000/api/users
export async function getUsers(req,res){
try {
   const users = await Users.find({})
   
  if(!users) return res.status(404).json({error:"Date not Found"})
   res.status(200).json(users)
} catch (error) {
    res.status(404).json({error:"error while Featching Date"})
}
}
// GET:http://localhost:3000/api/user/id
export async function getUser(req,res){
    try {
            const {userId} =  req.query

            if(userId){
                const user = await Users.findById(userId)
                res.status(200).json(user)
            }
            res.status(404).json({error:"User not Selected...!"})
    } catch (error) {
        res.status(404).json({error:"Can not get User"})
    }
}

// POST:http://localhost:3000/api/users

export async function postUser(req,res){
    try {
          const formDate = req.body
          if(!formDate) return res.status()
          Users.create(formDate,function(err,date){
                return res.status(200).json(date)
          })
        } catch (error) {
        return res.status(404).json({error}).json({error:"Form Date Not Provided ..!"}) 
         
    }
}

// PUT:http://localhost:3000/api/users/id

export async function putUser(req,res) {
    try {
        const{ userId} =  req.query
    const formDate =  req.body

    if(userId&&formDate) {
        await Users.findByIdAndUpdate(userId,formDate)
        res.status(200).json(formDate)
    }
    res.status(404).json({error:"User Not Selected..!"})

    } catch (error) {
        res.status(404).json({error:"Error while Updating the Date..!"})
    }
}

// DELETE:http://localhost:3000/api/users/id

export async function deleteUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json(user)
        }

        res.status(404).json({ error: "User Not Selected...!"})

    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!"})
    }
}