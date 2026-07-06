"use client"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

interface MealCardProps {
  meal: any;
}

export function MealCard({ meal }: MealCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleSubmit = () => {
    const data = {
      mealId: meal.id,
      name: meal.name,
      price: meal.price,
      image: meal.image,
      quantity: 1,
    };

    addToCart(data);
    toast.success("Added to cart");
  };
  return (
    <Card className="group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
        
          src={meal.image}
          alt={meal.name}
          // onError={(e)=>e.currentTarget.src="/placeholder.jpg"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge className="absolute left-3 top-3">{meal.category.name}</Badge>
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="line-clamp-1 text-xl font-bold">{meal.name}</h2>

            <p className="text-sm text-muted-foreground">
              {meal.provider.restaurantName}
            </p>
          </div>

          <span className="text-lg font-bold text-primary">৳{meal.price}</span>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {meal.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{meal.cuisine.replaceAll("_", " ")}</Badge>

          <Badge variant="outline">
            {meal.dietaryType.replaceAll("_", " ")}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        <Button className="flex-1">
          <Link href={`meals/${meal?.id}`}>View Details</Link>
        </Button>

        <Button onClick={handleSubmit} variant="outline" size="icon">
          ❤️
        </Button>
      </CardFooter>
    </Card>
  );
}
