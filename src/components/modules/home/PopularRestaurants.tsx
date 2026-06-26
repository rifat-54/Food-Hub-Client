import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const restaurants = [
  {
    name: "Rifat Food Corner",
    cuisine: "Bangladeshi",
    meals: 28,
    rating: 4.9,
  },
  {
    name: "Italian House",
    cuisine: "Italian",
    meals: 18,
    rating: 4.8,
  },
  {
    name: "Thai Express",
    cuisine: "Thai",
    meals: 22,
    rating: 4.7,
  },
];

export function PopularRestaurants() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Popular Restaurants
            </h2>

            <p className="mt-2 text-muted-foreground">
              Discover meals from our top-rated restaurant partners.
            </p>
          </div>

          <Button variant="outline" asChild>
            <Link href="#">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.name}
              className="transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  🍽️
                </div>

                <h3 className="text-xl font-semibold">
                  {restaurant.name}
                </h3>

                <p className="mt-1 text-muted-foreground">
                  {restaurant.cuisine}
                </p>

                <div className="mt-6 flex justify-between text-sm">
                  <span>{restaurant.meals} Meals</span>
                  <span>⭐ {restaurant.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}