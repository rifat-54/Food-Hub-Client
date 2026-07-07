"use client"
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

interface MealCardProps {
  meal: any;
}

export default function MealCard({
  meal,
}: MealCardProps) {
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
    <Card className="overflow-hidden transition hover:shadow-lg">
      <div className="relative h-52 w-full">
        <Image
        fill
          src={meal.image}
          alt={meal.name}
          
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-semibold">
            {meal.name}
          </h2>

          <div className="mt-2 flex gap-2">
            <Badge>{meal.cuisine}</Badge>

            <Badge variant="secondary">
              {meal.dietaryType}
            </Badge>
          </div>
        </div>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {meal.description}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">
            ৳{meal.price}
          </p>

          <CardFooter className="flex gap-3">
        <Button className="flex-1">
          <Link href={`/meals/${meal.id}`}>View Details</Link>
        </Button>

        <Button onClick={handleSubmit} variant="outline" size="icon">
          ❤️
        </Button>
      </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}