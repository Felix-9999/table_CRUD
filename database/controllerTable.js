// Controller
import Users from "../model/tableSchema"
 
// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({})

    if (!users) {
      return res.status(404).json({ error: "Data not found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Error while fetching data" });
  }
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findOne({ _id: userId });

      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    }

    return res.status(404).json({ error: "User ID not provided" });
  } catch (error) {
    return res.status(500).json({ error: "Error while getting user" });
  }
}

// post : http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;

    if (!formData) {
      return res.status(400).json({ error: "Form data not provided" });
    }

    const user = await Users.create(formData);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Error while creating user" });
  }
}

// put : http://localhost:3000/api/users/1
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    }

    return res.status(404).json({ error: "User ID or form data not provided" });
  } catch (error) {
    return res.status(500).json({ error: "Error while updating user" });
  }
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId);

      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    }

    return res.status(404).json({ error: "User ID not provided" });
  } catch (error) {
    return res.status(500).json({ error: "Error while deleting user" });
  }
}