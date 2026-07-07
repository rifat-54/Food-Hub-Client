import { Meals } from "@/components/modules/commonLayoutComponent/meals/Meals";
import SearchBox from "@/components/modules/commonLayoutComponent/meals/SearchBox";
import { categoryServices } from "@/services/category.service";
import { mealServices } from "@/services/meals.service";

type MealsPageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    cuisine?: string;
    dietary?: string;
  }>;
};

export default async function MealsPage({ searchParams }: MealsPageProps) {

  const params=await searchParams

  const meals = await mealServices.getMeals(params);

  const { data } = await categoryServices.getAllCategory();

  console.log(data);

  return (
    <main className="container mx-auto py-10 space-y-10">
      <SearchBox categories={data} />
      <Meals meals={meals} />
    </main>
  );
}
