import { env } from "@/env"

export const mealServices={
    getMeals:async function(){
         const url=env.API_URL


        try {
            const res=await fetch(`${url}/menu`)
            const data=await res.json()
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}