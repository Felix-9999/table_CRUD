
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    try {
        await connectMongo();

        // Only post method is accepted
        if (req.method === 'POST') {
            if (!req.body) return res.status(404).json({ error: "Don't have form data...!" });
            const { username, email, password } = req.body;

            // Check duplicate users
            const checkexisting = await Users.findOne({ email });
            if (checkexisting) return res.status(422).json({ message: "User Already Exists...!" });

            // Hash password
            const hashedPassword = await hash(password, 12);
            const newUser = new Users({ username, email, password: hashedPassword });
            await newUser.save();

            res.status(201).json({ status: true, user: newUser });
        } else {
            res.status(500).json({ message: "HTTP method not valid, only POST accepted" });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
}