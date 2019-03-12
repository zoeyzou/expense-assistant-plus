import { User } from '../models/user';
import { Request } from './axios-request';

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

export async function loadExpenses(
  pageLimit: number,
  offset: number
): Promise<any> {
  const path = `/expenses?limit=${pageLimit}&offset=${offset}`;

  return await Request({
    method: 'get',
    url: path,
  });
}
