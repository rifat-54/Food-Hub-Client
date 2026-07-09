import MealsTable from "@/components/modules/dashboardComponent/providerMeals/MealsTable";
import ProviderMealsPageCard from "@/components/modules/dashboardComponent/providerMeals/ProviderMealsPageCard";
import { providerServices } from "@/services/provider.service";
import React from "react";

export default async function MealsPage() {
  const response = await providerServices.getProviderMeals();

  if (!response) {
    return <div>Faild to load data</div>;
  }
  const data = response.data;
  console.log(data);

  return (
    <div className="container">
      {data && <ProviderMealsPageCard data={data} />}

      <MealsTable meals={data?.meals} />
    </div>
  );
}
