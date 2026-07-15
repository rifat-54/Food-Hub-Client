// "use server"

// import { providerServices } from "@/services/provider.service"
// import { ProviderProfileType } from "@/types/provider.types"
// import { revalidateTag } from "next/cache"

// export const deleteMeals=async(id:string)=>{
//     const result=await providerServices.deleteMeals(id)
 
//     revalidateTag("provider-meals","max")
//     return result
// }

// export const createProviderProfile=async(data:ProviderProfileType)=>{
//     const result=await providerServices.createProviderProfile(data)
 
//     // revalidateTag("provider-meals","max")

    

//     return result
// }
