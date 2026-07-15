import { env } from "@/env";
// import { cookies } from "next/headers"

// const url=env.API_URL
const publicUrl = env.NEXT_PUBLIC_API_URL;

export const categoryServices = {
  getAllCategory: async function () {
    try {
      // const cookieStore=await cookies()
      const res = await fetch(`${publicUrl}/category`, {
        credentials: "include",
      });
      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
  createCategory: async function (status: string) {
    try {
      const res = await fetch(`${publicUrl}/category`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: status }),
      });
      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
  deleteCategory: async function (id: string) {
    try {
      const res = await fetch(`${publicUrl}/category/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
};
