import { env } from "@/env";
import { OrderStatus } from "@/types/order.types";

import { cookies } from "next/headers";

const url = env.API_URL;

export const orderServices = {
  getOrderById: async function (id: string) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${url}/orders/${id}`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: data.message } };
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong!", error } };
    }
  },
  updateOrderStatus: async function (id: string, payload:{status:OrderStatus }) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${url}/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: data.message } };
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong!", error } };
    }
  },
  getProviderAllOrders:async function () {
    const cookieStore=await cookies()
    try {
      const res=await fetch(`${url}/orders/provider`,{
        headers:{
          Cookie:cookieStore.toString()
        }
      })
      const data=await res.json()
      return {data,error:null}

    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong!", error } };
    }
  }
};
