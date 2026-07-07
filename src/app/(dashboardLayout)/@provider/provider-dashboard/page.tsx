import { redirect } from 'next/navigation'
import React from 'react'

export default function ProviderDashboard() {
  return redirect("provider-dashboard/meals")
}
