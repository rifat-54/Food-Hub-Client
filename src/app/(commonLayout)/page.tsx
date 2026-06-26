
import { Categories } from "@/components/modules/home/Category";
import { FeaturedMeals } from "@/components/modules/home/FeaturedMeals";
import { Hero } from "@/components/modules/home/Hero";
import { PopularRestaurants } from "@/components/modules/home/PopularRestaurants";
import { Reviews } from "@/components/modules/home/reviews";
import { WhyFoodHub } from "@/components/modules/home/WhyFoodHub";
import { Button } from "@/components/ui/button";
import { mealServices } from "@/services/meals.service";


export default async function Home() {
   const meals = await mealServices.getMeals();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <Categories/>
        <FeaturedMeals meals={meals} />
        <WhyFoodHub/>
        <PopularRestaurants/>
        <Reviews/>
    </div>
  );
}
