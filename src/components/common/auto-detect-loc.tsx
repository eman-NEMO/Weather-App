import React from 'react'
import { Button } from '../ui/button'
import { LocateFixed } from 'lucide-react';
export default function DetectLocation() {
  return (
    // <div className='dark:bg-blue-2 dark:text-white    '>
        <Button className='w-50 bg-blue-2  dark:text-white  '>
         <LocateFixed/>
            Get Location 
        </Button>
    // </div>
  )
}
