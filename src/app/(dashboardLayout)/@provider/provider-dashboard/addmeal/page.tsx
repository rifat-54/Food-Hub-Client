import AddMealsCard from '@/components/modules/dashboardComponent/meals/AddMealsCard'
import { categoryServices } from '@/services/category.service'
import React from 'react'

export default async function AddMealPage() {
  const {data}=await categoryServices.getAllCategory()
  return (
    <div>
      <AddMealsCard categories={data}/>
    </div>
  )
}
