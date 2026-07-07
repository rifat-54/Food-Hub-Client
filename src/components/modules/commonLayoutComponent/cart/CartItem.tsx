import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

interface CartItemType {
  mealId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const incriment = useCartStore((state) => state.increaseQuantity);
  const decriment = useCartStore((state) => state.decreaseQuantity);
  const deleteItem = useCartStore((state) => state.removeFromCart);

  return (
    <Card>
      <CardContent className="flex flex-col gap-5 p-5 sm:flex-row">
        {/* Image */}
        <div className="relative h-32 w-full overflow-hidden rounded-lg sm:h-28 sm:w-36">
          <Image fill src={item.image} alt={item.name} className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">{item.name}</h2>

            <p className="mt-2 text-lg font-medium text-primary">
              ৳{item.price}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between">
            {/* Quantity */}
            <div className="flex items-center gap-2 rounded-lg border p-1">
              <Button
                onClick={() => decriment(item.mealId)}
                size="icon"
                variant="ghost"
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>

              <Button
                onClick={() => incriment(item.mealId)}
                size="icon"
                variant="ghost"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Remove */}
            <Button
              onClick={() => deleteItem(item.mealId)}
              variant="destructive"
              size="icon"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
