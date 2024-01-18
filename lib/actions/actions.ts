import User, {IUser} from '../models/User';
import { connectToDB } from '../utils';

export const addUser = async (formData: FormData) => {
    "use server"
  const { fullname, username, email, password, role, confirmed } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      fullname,
      username,
      email,
      password,
      role,
      confirmed,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create user');
  }
};
