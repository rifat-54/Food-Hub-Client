
import { env } from '@/env'
import { UserStatus } from '@/types/user.types'
import { error } from 'console'
import { cookies } from 'next/headers'
import React from 'react'

const authUrl=env.BETTER_AUTH_URL

const url=env.API_URL

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

            console.log(res)
            const session=await res.json()

            if(!session){
                return{data:null,error:{message:"Something is missing"}}
            }

            return {data:session,error:null}
        } catch (error) {
            return{data:null,error:{message:"Something is missing"}}
        }
    },
    getAllUsers:async function () {
        try {
            const cookieStore=await cookies()
            
            const res=await fetch(`${url}/user`,{
                headers:{
                    Cookie:cookieStore.toString()
                }
                
            })
            const data=await res.json()


            return {data,error:null}
        } catch (error) {
            return{data:null,error:{message:"Something is missing"}}
        }
    },
    updateUserStatus:async function (id:string,data:UserStatus) {
        try {
            const cookieStore=await cookies()
            const res=await fetch(`${url}/user/${id}`,{
                method:"PATCH",
                headers:{
                    Cookie:cookieStore.toString(),
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({status:data})
            })
            const result=await res.json()

            return {data:result,error:null}
        } catch (error) {
            return {data:null,error:{message:"Something Went Wrong",error}}
        }
    },
    getUserInfo:async function () {
        try {
            const cookieStore=await cookies()

            const res=await fetch(`${url}/user/me`,{
                headers:{
                    Cookie:cookieStore.toString()
                }
            })

            const data=await res.json()

            return {data,error:null}
        } catch (error) {
             return {data:null,error:{message:"Something Went Wrong",error}}
        }
    }
}
