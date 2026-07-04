import { env } from "@/env"
import { reviewType } from "@/types/review.types"
import { cookies } from "next/headers"


const url=env.API_URL

export const reviewServices={
    createReview:async function(data:reviewType){
        try {
            const cookieStore=await cookies()
            const res= await fetch(`${url}/review`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Cookie:cookieStore.toString()
                },
                body:JSON.stringify(data)
            })
            const result=await res.json()
            return {data:result,error:null}

        } catch (error) {
            return {data:null,error:{message:"Something went wrong",error}}
        }
    }
}