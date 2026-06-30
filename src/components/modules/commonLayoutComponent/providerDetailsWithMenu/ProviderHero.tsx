import Image from "next/image";
import { MapPin, User, UtensilsCrossed } from "lucide-react";

interface ProviderHeroProps {
  provider: {
    restaurantName: string;
    description: string;
    image: string;
    address: string;
    user: {
      name: string;
    };
    meals: {
      id: string;
    }[];
  };
}

export default function ProviderHero({
  provider,
}: ProviderHeroProps) {
  return (
    <section className="overflow-hidden rounded-xl border">
      <div className="relative h-72 w-full">
        <Image
          src={provider.image}
          alt={provider.restaurantName}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h1 className="text-3xl font-bold">
            {provider.restaurantName}
          </h1>

          <p className="mt-1 flex items-center gap-2 text-muted-foreground">
            <User className="h-4 w-4" />
            {provider.user.name}
          </p>
        </div>

        <p>{provider.description}</p>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {provider.address}
          </div>

          <div className="flex items-center gap-2">
            <UtensilsCrossed className="h-4 w-4" />
            {provider.meals.length} Meals
          </div>
        </div>
      </div>
    </section>
  );
}