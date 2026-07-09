import AddMealsCard from "@/components/modules/dashboardComponent/meals/AddMealsCard";
import { categoryServices } from "@/services/category.service";
import React from "react";

export default async function AddMealPage() {
  const response = await categoryServices.getAllCategory();
  if (!response) {
    return <div>Faild to load data</div>;
  }
  const data = response.data;
  return (
    <div>
      <AddMealsCard categories={data} />
    </div>
  );
}
