import { Star } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const reviews = [
  {
    name: "Sarah Ahmed",
    role: "Food Lover",
    review:
      "FoodHub made ordering food so easy. The meals arrived fresh, hot, and exactly as described.",
  },
  {
    name: "John Smith",
    role: "Regular Customer",
    review:
      "The variety of restaurants is amazing. I always find something new to try every week.",
  },
  {
    name: "Emily Johnson",
    role: "Happy Customer",
    review:
      "Beautiful interface, fast delivery, and excellent customer support. Highly recommended!",
  },
];

export function Reviews() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-muted-foreground">
            Thousands of customers trust FoodHub for delicious meals and a
            seamless ordering experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card
              key={review.name}
              className="transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 -yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mb-6 text-muted-foreground">
                  "{review.review}"
                </p>

                <div>
                  <h3 className="font-semibold">
                    {review.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {review.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}