import { userService } from '@/services/user.service';
import { NextRequest } from 'next/server';
import React from 'react'

export  async function proxy(request:NextRequest) {

    console.log("proxy calledS")

    const data=await userService.getSession()

    console.log(data)
  
}


export const config={
    matcher:[
        "/dashboard",
        "/dashboard/:path*",
        "/admin-dashboard",
        "/admin-dashboard/:path*",
        "/provider-dashboard",
        "/provider-dashboard/:path*"
    ]
}