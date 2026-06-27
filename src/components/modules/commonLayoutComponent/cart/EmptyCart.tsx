import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyCart() {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="text-center">
        <ShoppingCart className="mx-auto h-20 w-20 text-muted-foreground" />

        <h2 className="mt-6 text-3xl font-bold">
          Your Cart is Empty
        </h2>

        <p className="mt-2 text-muted-foreground">
          Browse meals and add your favorites.
        </p>

        <Button asChild className="mt-6">
          <Link href="/meals">
            Browse Meals
          </Link>
        </Button>
      </div>
    </div>
  );
}