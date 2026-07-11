"use client"
import { useForm } from "react-hook-form";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import { useCartStore } from "@/store/cart-store";
import { env } from "@/env";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface meal{
    mealId:string,
    quantity:number
}

export default function CheckoutForm() {
    const router=useRouter()


    const form=useForm()

    const cart=useCartStore((state)=>state.cart)
    const clearCart=useCartStore((state)=>state.clearCart)

    const onSubmit=async(data:any)=>{
        // console.log(data)
        // console.log(cart)

        const deliveryAddress=`${data.streetAddress},${data.area},${data.city}`

        const cartdata=cart.map((item:meal)=>({
            mealId:item.mealId,
            quantity:item.quantity
        }))

        const payload={
            deliveryAddress,
            items:cartdata
        }

        // console.log(payload)

        const res=await fetch(`${env.NEXT_PUBLIC_API_URL}/orders`,{
            method:'POST',
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })

        const resData=await res.json()

        if(resData){
            toast.success("Successfully Placed An Order!")

            form.reset()
            clearCart()
            router.push("/dashboard/myorders")
        }

        // console.log(resData)
    }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <DeliveryAddress form={form} />
      </div>

      <OrderSummary />
    </div>
    </form>
  );
}