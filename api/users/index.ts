import { api } from '../index';
import { TAxiosResponse } from '../apiType';
import { userCreateRequest } from './type';
import { User } from '../auth/type';

export const getAllUsers = (): TAxiosResponse<any> => api.get('/user');

export const createUser = (userData: userCreateRequest): TAxiosResponse<User> =>
    api.post('/user/create', userData);



export const UsersApi = {
    getAllUsers,
    createUser
}
  