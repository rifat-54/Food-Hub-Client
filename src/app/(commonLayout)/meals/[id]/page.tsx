import { MealDetails } from '@/components/modules/commonLayoutComponent/meals/MealsDetails';
import { mealServices } from '@/services/meals.service';
import React from 'react'

export default async function MealsDetailsPage({params}:{params:Promise<{id:string}>}) {

    const {id}=await params;

    const data=await mealServices.getMealsById(id)

    console.log(data)


  return (
    <MealDetails meal={data.data}/>
  )
    
}
