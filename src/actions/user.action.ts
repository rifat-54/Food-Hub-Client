"use server";
import { userService } from "@/services/user.service";
import { UserStatus } from "@/types/user.types";
import { revalidatePath } from "next/cache";

export const updateUserStatus = async (id: string, staus: UserStatus) => {
  const result = await userService.updateUserStatus(id, staus);
  if (result.error) {
    throw new Error(result.error.message);
  }
  revalidatePath("/admin-dashboard/users")
  return result;
};


// export const createLogin=async(data:any)=>{
//   const res=await userService.createLogin(data)
//   return res;
// }
