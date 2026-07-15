"use client"
import AddMealsCard from "@/components/modules/dashboardComponent/meals/AddMealsCard";
import { categoryServices } from "@/services/category.service";
import React, { useEffect, useState } from "react";

export default function AddMealPage() {


const [category,setCategory]=useState<any>(null)

const loadCategory=async()=>{
  const response = await categoryServices.getAllCategory();
  setCategory(response.data)

}

useEffect(()=>{
  loadCategory()
},[])

  if (!category) {
    return <div>Loading...</div>;
  }

  // console.log("from category",response)

  // const data = response.data;
  return (
    <div>
      <AddMealsCard categories={category} />
    </div>
  );
}
