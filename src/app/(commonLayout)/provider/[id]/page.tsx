import MenuSection from '@/components/modules/commonLayoutComponent/providerDetailsWithMenu/MenuSection'
import ProviderHero from '@/components/modules/commonLayoutComponent/providerDetailsWithMenu/ProviderHero'
import { providerServices } from '@/services/provider.service'
import React from 'react'

export default async function ProviderMenuPage({params}:{params:Promise<{id:string}>}) {

    const {id}=await params

    const {data}=await providerServices.getProviderWithMenu(id)

    // console.log(data)
  return (
    <main className="container mx-auto space-y-10 py-10">
      <ProviderHero provider={data} />

      <MenuSection meals={data.meals} />
    </main>
  );
}
