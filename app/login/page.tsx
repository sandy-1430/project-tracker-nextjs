"use client";
import LoginForm from '@/components/auth/login-form';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Page() {   
    const router = useRouter(); 
    const [loaded, setLoaded] = useState(false)
    const { user }:any = useSelector((state: RootState) => state.auth);

    useEffect(() => {
      setLoaded(true)
    }, [])
  
    useEffect(() => {
      if(user){
        router.replace("/")
      }
    }, [user])
    
    if(!loaded) return null
  
    return (
        <LoginForm />
    )
}
