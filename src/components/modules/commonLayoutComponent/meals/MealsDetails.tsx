"use client"
import Image from "next/image";
import {
  Badge,
} from "@/components/ui/badge";
import {
  Button,
} from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  MapPin,
  User,
  Store,
  Star,
  ShoppingCart,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

interface MealDetailsProps {
  meal: any;
}

export function MealDetails({ meal }: MealDetailsProps) {
    
    const addToCart=useCartStore((state)=>state.addToCart)

    const data={
      mealId: meal.id,
      name: meal.name,
      price: meal.price,
      image: meal.image,
      quantity: 1,
    }

    const handleSubmit=()=>{
        addToCart(data)
        toast.success("Added to Cart")
    }
    
  return (
    <section className="container mx-auto py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image */}

        <div className="overflow-hidden rounded-2xl border">
          <Image
            src={meal.image}
            alt={meal.name}
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details */}

        <div className="flex flex-col">
          <div className="mb-6 flex items-center gap-2">
            <Star className="h-5 w-5 -yellow-400 text-yellow-400" />
            <span className="font-medium">
              4.9 (250 Reviews)
            </span>
          </div>

          <h1 className="text-5xl font-bold">
            {meal.name}
          </h1>

          <p className="mt-4 text-4xl font-bold text-primary">
            ${meal.price}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Badge>
              {meal.category.name}
            </Badge>

            <Badge variant="secondary">
              {meal.cuisine.replaceAll("_", " ")}
            </Badge>

            <Badge variant="outline">
              {meal.dietaryType.replaceAll("_", " ")}
            </Badge>
          </div>

          <Card className="mt-8">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <Store className="text-primary" />
                <div>
                  <p className="font-semibold">
                    {meal.provider.restaurantName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Restaurant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="text-primary" />
                <div>
                  <p className="font-semibold">
                    {meal.provider.user.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Provider
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <div>
                  <p className="font-semibold">
                    {meal.provider.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Location
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
          onClick={handleSubmit}
            size="lg"
            className="mt-8 h-14 text-lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Description */}

      <div className="mt-16">
        <h2 className="mb-4 text-3xl font-bold">
          Description
        </h2>

        <p className="max-w-4xl leading-8 text-muted-foreground">
          {meal.description}
        </p>
      </div>
    </section>
  );
}