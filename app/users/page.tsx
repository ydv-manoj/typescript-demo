import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props{
    searchParams:{sortOrder:string}
}

const UserPage = async({searchParams:{sortOrder}}:Props) => {


  return (
    <div>
        <h1>Users</h1>
        <Link className='btn' href='/users/new'>Create User</Link>
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
            <UserTable sortOrder={sortOrder}/>
        </Suspense>
    </div>
  )
}

export default UserPage