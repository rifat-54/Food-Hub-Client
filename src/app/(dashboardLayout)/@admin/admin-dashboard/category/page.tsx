import { CategoriesHero } from '@/components/modules/dashboardComponent/category/categories-hero'
import { CategoriesTable } from '@/components/modules/dashboardComponent/category/categories-table'
import { categoryServices } from '@/services/category.service'
import React from 'react'

export default  async function CategoryPage() {
    const {data}=await categoryServices.getAllCategory()

    console.log(data)

  return (
    <div>
        <CategoriesHero categories={data}/>
        <CategoriesTable categories={data} />
    </div>
  )
}
