import { AllOrdersTable } from '@/components/modules/dashboardComponent/order/AllOrdersTable'
import { OrdersHero } from '@/components/modules/dashboardComponent/order/OrderHero'
import { orderServices } from '@/services/order.service'


export default async function AlloOrders() {
    const {data}=await orderServices.getAllOrders()
    console.log(data)
  return (
    <div>
        <OrdersHero orders={data}/>
        <AllOrdersTable orders={data}/>
    </div>
  )
}
