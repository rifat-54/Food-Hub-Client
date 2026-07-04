"use server"
import { mealServices } from "@/services/meals.service";
import { MealType } from "@/types/meal.types";


export const createMeal=async(data:MealType)=>{
    const result=await mealServices.createMeal(data)

    if(result.error){
        throw new Error(result.error.message)
    }
    return result
}