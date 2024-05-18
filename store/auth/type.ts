import { User } from '@/api/auth/type';
import { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: User | null;
}

export type UserActionPayload = PayloadAction<User>;
