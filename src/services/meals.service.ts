import { env } from "@/env"


 const url=env.API_URL

export const mealServices={
    getMeals:async function(){

        try {
            const res=await fetch(`${url}/menu`)
            const data=await res.json()
            return data;
        } catch (error) {
            return {data:null,error:{message:"Something Went Wrong!",error}}
        }
    },
    getMealsById:async function(id:string){

        try {
            const res=await fetch(`${url}/menu/${id}`)
            const data=await res.json()
            return {data:data,error:null}
        } catch (error) {
            return {data:null,error:{message:"Something Went Wrong!",error}}
        }
    }
}