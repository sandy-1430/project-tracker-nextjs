"use client";
import UsersList from "@/components/features/users/usersList";
import Link from "next/link";

export default function Page() {      
    return (
        <div style={{padding: '50px'}}>
            <button style={{padding: '10px', color: '#000'}}>
                <Link href={'/users/create'}>
                    Create User
                </Link>
            </button>
            <UsersList />
        </div>
    )
}
