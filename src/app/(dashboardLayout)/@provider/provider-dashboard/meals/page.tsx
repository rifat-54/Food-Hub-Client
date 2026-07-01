import MealsTable from '@/components/modules/dashboardComponent/providerMeals/MealsTable'
import ProviderMealsPageCard from '@/components/modules/dashboardComponent/providerMeals/ProviderMealsPageCard'
import { providerServices } from '@/services/provider.service'
import React from 'react'

export default async function MealsPage() {

  const {data}=await providerServices.getProviderMeals()
  console.log(data)

  return (
    <div className='container'>
      <ProviderMealsPageCard meals={data?.meals}/>
      
      <MealsTable meals={data?.meals}/>
      </div>
  )
}
