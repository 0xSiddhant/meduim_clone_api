import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import { hashPassword } from '../utils/password';

interface UserSignupData {
  username: string;
  password: string;
  email: string;
}

export async function createUser(data: UserSignupData) {
  if (!data.username) throw new Error('username is blank');
  if (!data.password) throw new Error('password is blank');
  if (!data.email) throw new Error('email is blank');

  const user = new User();
  user.username = data.username;
  user.email = data.email;
  user.password = data.password;
  // const p = await hashPassword(data.password);
  // console.log(p);

  const result = await getRepository(User).save(user);
  console.log(result);

  return user;
}
