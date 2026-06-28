"use server";

import { orderServices } from "@/services/order.service";
import { OrderStatus } from "@/types/order.types";
import { revalidatePath } from "next/cache";

export const updateOrderStatus = async function (
  id: string,
  payload: { status: OrderStatus },
) {
  const result = await orderServices.updateOrderStatus(id, payload);
  if (result.error) {
    throw new Error(result.error.message);
  }

  revalidatePath("/dashboard/myorders");

  return result;
};
