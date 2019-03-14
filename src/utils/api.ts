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

export async function loadExpenseById(id: string) {
  const path = `expenses/${id}`;

  return await Request({
    method: 'get',
    url: path,
  });
}

export async function saveComment(id: string, comment: string) {
  if (!comment) {
    throw new Error("There's no comment");
  }

  const path = `expenses/${id}`;
  const data = { comment: comment };

  return await Request({
    method: 'post',
    url: path,
    data: data,
  });
}

export async function saveReceipt(id: string, file?: any) {
  if (!file) {
    throw new Error("There's no file");
  }

  const path = `expenses/${id}/receipts`;

  const data = new FormData();
  data.append('receipt', file, file.name);

  return await Request({
    method: 'post',
    url: path,
    data: data,
  });
}
