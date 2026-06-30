import { Meals } from "@/components/modules/commonLayoutComponent/meals/Meals";
import { mealServices } from "@/services/meals.service";


export default async function MealsPage() {
  const meals = await mealServices.getMeals();

  console.log(meals)

  return (
    <main className="container mx-auto py-10">
      <Meals meals={meals} />
    </main>
  );
}