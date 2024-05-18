import { api } from '../index';
import { TAxiosResponse } from '../apiType';
import { LoginRequest, LoginResponse} from './type';

export const login = (form: LoginRequest): TAxiosResponse<LoginResponse> =>
    api.post('/auth/login', form);

export const getProfile = (): TAxiosResponse<any> => api.get('/user/getProfile');

export const AuthApi = {
    login,
    getProfile
}
  