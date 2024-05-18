"use client";

import Link from "next/link";

export default function Home() {
  console.log("Home Page");
  
  return (
    <main>
        Test
        <Link href='/users'>Users</Link>
    </main>
  );
}
