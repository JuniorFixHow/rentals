"use client"
import { useUser } from "@clerk/nextjs"

const MyC = () => {
    const {isSignedIn} = useUser()
    console.log(isSignedIn)
  return (
    <div>MyC</div>
  )
}

export default MyC