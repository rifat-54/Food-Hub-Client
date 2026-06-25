
import { env } from '@/env'
import { cookies } from 'next/headers'
import React from 'react'

const authUrl=env.BETTER_AUTH_URL

export  const userService={
    getSession:async function(){
        try {
            const cookieStore=await cookies()
            
            const res=await fetch(`${authUrl}/get-session`,{
                headers:{
                    Cookie:cookieStore.toString()
                },
                cache:"no-store"
            })
            const session=await res.json()

            if(!session){
                return{data:null,error:{message:"Something is missing"}}
            }

            return {data:session,error:null}
        } catch (error) {
            return{data:null,error:{message:"Something is missing"}}
        }
    }
}
