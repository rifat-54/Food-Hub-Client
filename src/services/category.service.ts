import { env } from "@/env"
import { cookies } from "next/headers"


const url=env.API_URL

export const categoryServices={
    getAllCategory:async function () {
        try {
            const cookieStore=await cookies()
            const res=await fetch(`${url}/category`,{
                headers:{
                    Cookie:cookieStore.toString()
                }
            })
            const data=await res.json()

            return {data,error:null}
        } catch (error) {
            return {data:null,error:{message:"Something went wrong",error}}
        }
    },
    createCategory:async function (status:string) {
        try {
            const cookieStore=await cookies()
            const res=await fetch(`${url}/category`,{
                method:"POST",
                headers:{
                    Cookie:cookieStore.toString(),
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name:status})
            })
            const data=await res.json()

            return {data,error:null}
        } catch (error) {
            return {data:null,error:{message:"Something went wrong",error}}
        }
    },

}