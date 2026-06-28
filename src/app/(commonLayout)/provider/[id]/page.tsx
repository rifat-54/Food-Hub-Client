import React from 'react'

export default async function ProviderMenuPage({params}:{params:Promise<{id:string}>}) {

    const {id}=await params

    console.log(id)
  return (
    <div>ProviderMenuPage

       {id}
    </div>
  )
}
