import User from "../models/User";
import {connectToDB} from '../utils'

export const fetchUsers = async (q: string, page:string) => {

  const regex = new RegExp(q, "i");
  
  const LIMIT_ITEMS = 5
    try {
      connectToDB()
      // similar to what I leanred from Staffan Enberg getting all posts but now use it to get all users
      const count = await User.countDocuments()
        const users = await User.find({ username: { $regex: regex } }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1))
      return { count, users };
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