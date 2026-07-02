"use server"

import { providerServices } from "@/services/provider.service"
import { revalidateTag } from "next/cache"

export const deleteMeals=async(id:string)=>{
    const result=await providerServices.deleteMeals(id)
 
    revalidateTag("provider-meals","max")
    return result
}
