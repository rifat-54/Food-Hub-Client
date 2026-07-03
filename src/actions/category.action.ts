"use server"

import { categoryServices } from "@/services/category.service"

export const createCategory=async(status:string)=>{
    const result=await categoryServices.createCategory(status)

    if(result.error){
        throw new Error(result.error.message)
    }

    return result

}