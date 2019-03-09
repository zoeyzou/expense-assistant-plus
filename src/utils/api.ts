import { User } from '../models/user';

async function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export async function loadUser(): Promise<User> {
  await delay(3000);
  // fake a user
  const user: User = { name: 'william' };
  return user;
}
