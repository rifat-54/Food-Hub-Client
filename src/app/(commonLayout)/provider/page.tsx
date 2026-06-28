import ProviderList from "@/components/modules/commonLayoutComponent/provider/ProviderList";
import { providerServices } from "@/services/provider.service";

export default async function ProvidersPage() {
  const { data } = await providerServices.getAllProvider()

  return (
    <section className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Food Providers
        </h1>

        <p className="text-muted-foreground">
          Discover restaurants and home chefs.
        </p>
      </div>

      <ProviderList providers={data} />
    </section>
  );
}