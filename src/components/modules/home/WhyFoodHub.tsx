import {
  Clock3,
  ShieldCheck,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your favorite meals delivered quickly and fresh to your doorstep.",
  },
  {
    icon: UtensilsCrossed,
    title: "Quality Meals",
    description:
      "Enjoy delicious dishes prepared by trusted restaurants and experienced chefs.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your orders and personal information are protected with secure technology.",
  },
  {
    icon: Clock3,
    title: "Easy Ordering",
    description:
      "Browse, order, and track your meals in just a few simple clicks.",
  },
];

export function WhyFoodHub() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-bold">
            Why Choose FoodHub?
          </h2>

          <p className="mt-4 text-muted-foreground">
            We connect food lovers with trusted restaurants, making it easy to
            discover and enjoy amazing meals anytime.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}