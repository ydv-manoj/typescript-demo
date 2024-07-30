"use client"
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const {status,data:session}=useSession();
  console.log(session);

  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/users">
                  <p>Users</p>
                </Link>
              </li>
              <li>
                {status=='loading' && 
                <Link href="">
                  <p>Loading...</p>
                </Link> }
                {status=='unauthenticated' && 
                <Link href="/api/auth/signin">
                  <p>Sign In</p>
                </Link> }
                {status=='authenticated' && 
                <Link href="/api/auth/signin">
                  <p>{session.user!.name}</p>
                  <Link href="/api/auth/signout">Sign Out</Link>
                </Link> }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;