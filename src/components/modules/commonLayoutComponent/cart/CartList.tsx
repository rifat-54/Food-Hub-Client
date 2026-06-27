import CartItem from "./CartItem";

interface CartItemType {
  mealId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartListProps {
  items: CartItemType[];
}

export default function CartList({ items }: CartListProps) {
  return (
    <div className="space-y-5 lg:col-span-2">
      {items.map((item) => (
        <CartItem key={item.mealId} item={item} />
      ))}
    </div>
  );
}