import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface MealCardProps {
  meal: any;
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <Card className="group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge className="absolute left-3 top-3">
          {meal.category.name}
        </Badge>
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="line-clamp-1 text-xl font-bold">
              {meal.name}
            </h2>

            <p className="text-sm text-muted-foreground">
              {meal.provider.restaurantName}
            </p>
          </div>

          <span className="text-lg font-bold text-primary">
            ৳{meal.price}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {meal.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            {meal.cuisine.replaceAll("_", " ")}
          </Badge>

          <Badge variant="outline">
            {meal.dietaryType.replaceAll("_", " ")}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        <Button className="flex-1">
          View Details
        </Button>

        <Button
          variant="outline"
          size="icon"
        >
          ❤️
        </Button>
      </CardFooter>
    </Card>
  );
}