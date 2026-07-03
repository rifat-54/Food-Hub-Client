"use server"

import { categoryServices } from "@/services/category.service"
import { revalidatePath, revalidateTag } from "next/cache"

export const createCategory=async(status:string)=>{
    const result=await categoryServices.createCategory(status)

    if(result.error){
        throw new Error(result.error.message)
    }

    // revalidateTag("get-all-category","max")
    revalidatePath("/admin-dashboard/category")
    return result

}

export const deleteCategory=async(id:string)=>{
    const result=await categoryServices.deleteCategory(id)

    if(result.error){
        throw new Error(result.error.message)
    }

    // revalidateTag("get-all-category","max")
    revalidatePath("/admin-dashboard/category")
    return result

}