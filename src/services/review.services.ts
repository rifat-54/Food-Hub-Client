import { env } from "@/env"
import { reviewType } from "@/types/review.types"



const publicUrl=env.NEXT_PUBLIC_API_URL

export const reviewServices={
    createReview:async function(data:reviewType){
        try {

            const res= await fetch(`${publicUrl}/review`,{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
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