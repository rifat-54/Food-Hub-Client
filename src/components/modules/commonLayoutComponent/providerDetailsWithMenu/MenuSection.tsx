import MealCard from "./MealCard";

// import { MealCard } from "@/components/shareComponent/MealCard";

interface MenuSectionProps {
  meals: any[];
}

export default function MenuSection({
  meals,
}: MenuSectionProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          Menu
        </h2>

        <p className="text-muted-foreground">
          Explore all available meals.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
          />
        ))}
      </div>
    </section>
  );
}