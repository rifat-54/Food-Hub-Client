import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProviderCardProps {
  provider: {
    id: string;
    restaurantName: string;
    description: string;
    image: string;
    createdAt: string;
    user: {
      name: string;
      image: string | null;
    };
  };
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Card className="overflow-hidden transition hover:shadow-lg">
      <div className="relative h-56 w-full">
        <img
          
          src={provider.image || "/placeholder.jpg"}
          alt={provider.restaurantName}
          className="object-cover h-full w-full"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-semibold">
            {provider.restaurantName}
          </h2>

          <p className="text-sm text-muted-foreground">
            By {provider.user.name}
          </p>
        </div>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {provider.description}
        </p>

        <p className="text-xs text-muted-foreground">
          Joined{" "}
          {new Date(provider.createdAt).toLocaleDateString()}
        </p>

        <Button asChild className="w-full">
          <Link href={`/provider/${provider.id}`}>
            View Menu
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}