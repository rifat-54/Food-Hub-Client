import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MealCard } from "@/components/shareComponent/MealCard";


interface FeaturedMealsProps {
  meals: any[];
}

export function FeaturedMeals({ meals }: FeaturedMealsProps) {

  // console.log("meals -> ",meals)
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Featured Meals
            </h2>

            <p className="mt-3 text-muted-foreground">
              Handpicked meals loved by our customers.
            </p>
          </div>

          <Button asChild variant="outline">
            <Link href="/meals">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {meals?.slice(0, 4).map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}