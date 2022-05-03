import { ID } from '@datorama/akita';

export interface User {
  id: ID;
  username: string;
  email: string;
  avatar: string;
}

/**
 * A factory function that creates Users
 */
export function createUser(params: Partial<User>) {
  return {
    ...params
  } as User;
}
