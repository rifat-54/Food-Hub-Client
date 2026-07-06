import { env } from "@/env";
import { userService } from "./user.service";
import { cookies } from "next/headers";
import { ProviderProfileType } from "@/types/provider.types";

const url = env.API_URL;

export const providerServices = {
  getAllProvider: async function () {
    try {
      const res = await fetch(`${url}/provider`);
      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: "Something wernt wrong" } };
      }
      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
  getProviderWithMenu: async function (id: string) {
    try {
      const res = await fetch(`${url}/provider/${id}`);

      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: "Something wernt wrong" } };
      }
      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
  getProviderMeals: async function () {
    try {
      const cookieStore = await cookies();
      const { data } = await userService.getSession();
      console.log(data.user.id);

      const res = await fetch(`${url}/provider/allmeals`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        next: {
          tags: ["provider-meals"],
        },
      });
      const meals = await res.json();

      // if(!res.ok){
      //   return {data:null,error:{message:"Something went wrong"}}
      // }

      return { data: meals, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
  deleteMeals: async function (id: string) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${url}/menu/${id}`, {
        method: "DELETE",
        headers: {
          Cookie: cookieStore.toString(),
        },
      });
      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
  createProviderProfile: async function (data: ProviderProfileType) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${url}/provider`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString()
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      return { data:result, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong", error } };
    }
  },
};
