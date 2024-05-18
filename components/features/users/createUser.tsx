"use client";
import { UsersApi } from '@/api/users';
import { useFetch } from '@/utils/customHooks/useFetch';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function UserCreate() {
  const router = useRouter();

  const [{ response }, doFetch] = useFetch<any>(UsersApi.createUser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    doFetch({
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      empId: data.get('empId'),
      email: data.get('email'),
      role: data.get('role'),
      password: data.get('password'),
    })
  }

  useEffect(() => {
    if(response?.status === 200){
      router.replace("/users")
    }
  }, [response])
  

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name='firstname' placeholder='first name' />
        <input type="text" name='lastname' placeholder='last name' />
        <input type="text" name='empId' placeholder='Emp Id' />
        <input type="email" name='email' placeholder='Email' />
        <select name='role'>
          <option value="">Select Role</option>
          <option value="SUPER_ADMIN">Super Admin</option>
          <option value="ADMIN">Admin</option>
          <option value="DEVELOPER">Developer</option>
          <option value="TESTER">Tester</option>
        </select>
        <input type="password" name='password' placeholder='password' />
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}
