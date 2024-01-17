import User from "../models/User";
import {connectToDB} from '../utils'

export const fetchUsers = async (q: string) => {

    const regex = new RegExp(q, "i");
    try {
        connectToDB()
        const users = await User.find({ username: { $regex: regex } })
        return users
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch users!')
    }
}

export const fetchUser = async (id: string) => {
    console.log(id);
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };