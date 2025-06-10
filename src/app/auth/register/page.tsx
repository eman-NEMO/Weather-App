import React from 'react'
import RegisterForm from './_components/register-form'
import { getServerSession } from 'next-auth'

export default function page() {
  // const token=getServerSession()
  // console.log("ls",token.)
  return (
   <>
   <p className='font-bold text-2xl ms-[25%] mt-10'>Sign up</p>
   <RegisterForm/>
   </>
  )
}