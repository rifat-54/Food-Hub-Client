import { AllOrdersTable } from '@/components/modules/dashboardComponent/order/AllOrdersTable'
import { orderServices } from '@/services/order.service'


export default async function AlloOrders() {
    const {data}=await orderServices.getAllOrders()
    console.log(data)
  return (
    <div>

        <AllOrdersTable orders={data}/>
    </div>
  )
}
