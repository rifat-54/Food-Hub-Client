
import { env } from '@/env'
import { authClient } from '@/lib/auth-client'
import { serverFetch } from '@/lib/server-fetch'
import { UserStatus } from '@/types/user.types'

import { cookies } from 'next/headers'

const authUrl=env.BETTER_AUTH_URL

const url=env.API_URL

export  const userService={
    getSession:async function(){
        try {
            const cookieStore=await cookies()
            console.log("cookie store ->",cookieStore.getAll())
            
            
            const res=await serverFetch(`${authUrl}/get-session`,{
                headers:{
                    Cookie:cookieStore.toString()
                },
                cache:"no-store",
                
            })

            console.log(" res form user service ->",res)

            const session=await res.json()

            console.log("sessin from user service-> ",session)

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
    },
    createLogin:async function(value:any){
         const { data, error } = await authClient.signIn.email(value);

         return data;
    }
}
