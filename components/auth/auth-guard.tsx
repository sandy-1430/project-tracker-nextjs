'use client';
import { AuthApi } from '@/api/auth';
import { RootState } from '@/store';
import { setAuthTokenInSystem, setUser } from '@/store/auth/slice';
import { useFetch } from '@/utils/customHooks/useFetch';
import { getLSData } from '@/utils/localStorage';
import { getCookie } from 'cookies-next';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export interface AuthGuardProps {
  children: React.ReactNode;
}


export function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch();
  const [{ response }, doFetch] = useFetch<any>(AuthApi.getProfile);
  const { user }: any = useSelector((state: RootState) => state.auth);

  const accessToken:any = getLSData("accessToken") || getCookie("accessToken");

  useEffect(() => {
    if (!user && accessToken) {
      setAuthTokenInSystem(accessToken)
      doFetch()
    }
  }, [])

  useEffect(() => {
    if (response?.status === 200) {
      dispatch(setUser(response?.data?.data?.user))
    }
  }, [response])

  return (
    <>
      {children}
    </>
  )
}