import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              🍔 Fresh Meals Delivered Daily
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
              Discover Your
              <span className="block text-primary">
                Favorite Meals
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Browse hundreds of delicious meals from trusted restaurants.
              Fresh ingredients, fast delivery, and unforgettable flavors—all
              in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/menu">
                  Browse Meals
                </Link>
              </Button>

              <Button size="lg" variant="outline">
                Become a Provider
              </Button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-muted-foreground">Meals</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-muted-foreground">Restaurants</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <Image
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
              alt="Delicious Food"
              width={650}
              height={650}
              className="relative rounded-3xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}