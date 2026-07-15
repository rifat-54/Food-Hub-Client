"use client";

import { useEffect, useState } from "react";
import MealsTable from "@/components/modules/dashboardComponent/providerMeals/MealsTable";
import ProviderMealsPageCard from "@/components/modules/dashboardComponent/providerMeals/ProviderMealsPageCard";
import { providerServices } from "@/services/provider.service";

export default function MealsPage() {
  const [data, setData] = useState<any>(null);

  async function loadMeals() {
    const response = await providerServices.getProviderMeals();
    setData(response.data);
  }

  useEffect(() => {
    loadMeals();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <ProviderMealsPageCard data={data} />
      <MealsTable meals={data.meals} reload={loadMeals}/>
    </div>
  );
}