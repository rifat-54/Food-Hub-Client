import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center'>
        <h2 className='text-red-500'>Not Found</h2>
        <p>Could not find reqested resources</p>
        <Button>

        <Link href={"/"}>Return Home</Link>
        </Button>
    </div>
  )
}
