import ProviderCard from "./ProviderCard";


interface ProviderListProps {
  providers: any[];
}

export default function ProviderList({
  providers,
}: ProviderListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {providers.map((provider) => (
        <ProviderCard
          key={provider.id}
          provider={provider}
        />
      ))}
    </div>
  );
}