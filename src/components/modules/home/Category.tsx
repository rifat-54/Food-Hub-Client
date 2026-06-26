import Link from "next/link";
import {
  Pizza,
  Beef,
  Fish,
  Salad,
  IceCreamBowl,
  Soup,
  UtensilsCrossed,
  CookingPot,
} from "lucide-react";

const categories = [
  {
    name: "Bangladeshi",
    href: "#",
    icon: CookingPot,
  },
  {
    name: "Indian",
    href: "#",
    icon: Soup,
  },
  {
    name: "Chinese",
    href: "#",
    icon: UtensilsCrossed,
  },
  {
    name: "Italian",
    href: "#",
    icon: Pizza,
  },
  {
    name: "Burger",
    href: "#",
    icon: Beef,
  },
  {
    name: "Seafood",
    href: "#",
    icon: Fish,
  },
  {
    name: "Vegetarian",
    href: "#",
    icon: Salad,
  },
  {
    name: "Dessert",
    href: "#",
    icon: IceCreamBowl,
  },
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Browse by Category
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore delicious meals from your favorite cuisines.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={category.href}
                className="group rounded-2xl border bg-background p-8 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition group-hover:bg-primary">
                  <Icon className="h-8 w-8 text-primary transition group-hover:text-primary-foreground" />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {category.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}