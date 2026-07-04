import { env } from "@/env";
import { MealType } from "@/types/meal.types";
import { cookies } from "next/headers";

const url = env.API_URL;

export const mealServices = {
  getMeals: async function () {
    try {
      const res = await fetch(`${url}/menu`);
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
          Cookie: cookieStore.toString()
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
