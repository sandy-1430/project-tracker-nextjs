import { createSlice } from '@reduxjs/toolkit'
import { AuthState, UserActionPayload } from './type';
import { api } from '@/api';
import { removeLSData, setLSData } from '@/utils/localStorage';
import { setCookie } from 'cookies-next';

const initialState: AuthState = {
    user: null,
}

export function setAuthTokenInSystem(
  token: string
): void {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  setCookie("accessToken", token, {expires: new Date(Date.now() + 24 * 60 * 60 * 1000)})
  // setLSData("accessToken", token);
  // cookies().set("token", token);
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthState: () => ({ ...initialState }),
        logout() {
            removeLSData("accessToken")
            return {
                ...initialState,
            };
        },
        setUser(state, action: UserActionPayload) {
            state.user = action.payload;
        },
    },
})

export const { setUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;