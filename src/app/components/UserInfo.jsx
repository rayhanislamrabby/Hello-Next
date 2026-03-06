

"use client"

import { useSession } from "next-auth/react"

export default function UserInfo(){

 const { data: session } = useSession()

 return (
  
   <p>Role: {session?.user?.role }</p>
  
 )
}