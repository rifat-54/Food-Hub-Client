import { env } from "@/env";
import { MealType } from "@/types/meal.types";
import { cookies } from "next/headers";

const url = env.API_URL;

type MealFilter = {
  search?: string;
  category?: string;
  cuisine?: string;
  dietary?: string;
};

export const mealServices = {
  getMeals: async function (filter: MealFilter={}) {
    console.log(filter);
    try {
      const params = new URLSearchParams();

      if (filter.search) params.set("search", filter.search);
      if (filter.category) params.set("category", filter.category);
      if (filter.cuisine) params.set("cuisine", filter.cuisine);
      if (filter.dietary) params.set("dietary", filter.dietary);

      const res = await fetch(`${url}/menu?${params.toString()}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong!", error } };
    }
  },
  getMealsById: async function (id: string) {
    try {
      const res = await fetch(`${url}/menu/${id}`);
      const data = await res.json();
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong!", error } };
    }
  },
  createMeal: async function (data: MealType) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${url}/menu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      return { data: result, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong!", error } };
    }
  },
};
