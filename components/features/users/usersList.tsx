import React from 'react'
import { useFetch } from "@/utils/customHooks/useFetch";
import { useEffect } from "react";
import { UsersApi } from "@/api/users";
import { Each } from '@/utils/Each';

export default function UsersList() {
    const [{ response }, doFetch] = useFetch<any>(UsersApi.getAllUsers);

    useEffect(() => {
        doFetch()
    }, [])


    return (
        <div className='users-list'>
            {response?.data?.data?.users &&
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Emp Id</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Each
                            of={response?.data?.data?.users}
                            render={(item: any, index: any) =>
                                <tr>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.empId}</td>
                                    <td>{item.role}</td>
                                </tr>
                            }
                        />
                    </tbody>
                </table>
            }
        </div>
    )
}
