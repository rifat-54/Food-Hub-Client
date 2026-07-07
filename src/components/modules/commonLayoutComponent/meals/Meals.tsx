import { MealCard } from "@/components/shareComponent/MealCard";


interface MealsProps {
  meals: any[];
}

export function Meals({ meals }: MealsProps) {
  return (
    <>
      

      {meals?.length === 0 ? (
        <div className="rounded-lg border py-20 text-center">
          <h2 className="text-xl font-semibold">No meals found</h2>
          <p className="mt-2 text-muted-foreground">
            Please check back later.
          </p>
        </div>
      ) : (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </section>
      )}
    </>
  );
}