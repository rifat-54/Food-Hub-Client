import {create} from "zustand"
import {persist} from "zustand/middleware"

type CartItem = {
  mealId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];

  addToCart: (meal: CartItem) => void;
  removeFromCart: (mealId: string) => void;
  increaseQuantity: (mealId: string) => void;
  decreaseQuantity: (mealId: string) => void;
  clearCart: () => void;
};



export const useCartStore=create<CartStore>()(
    persist(
        (set)=>({
            cart:[],

            addToCart:(meal)=>{
                set((state)=>{
                    const existingMeal=state.cart.find((item)=>item.mealId===meal.mealId)
                    if(existingMeal){
                        return{
                            cart:state.cart.map((item)=>
                                item.mealId===meal.mealId ? {...item,quantity:item.quantity+1}:item
                            )
                        }
                    }
                    return{
                        cart:[...state.cart,meal]
                    }
                })
            },
            removeFromCart:(mealId)=>{
                set((state)=>({
                    cart:state.cart.filter((item)=>item.mealId!==mealId)
                }))
            },
            increaseQuantity:(mealId)=>{
                set((state)=>({
                    cart:state.cart.map((item)=>item.mealId===mealId ? {...item,quantity:item.quantity+1}:item)
                }))
            },
            decreaseQuantity:(mealId)=>{
                set((state)=>({
                    cart:state.cart.map((item)=>item.mealId===mealId ? {...item,quantity:item.quantity-1}:item).filter((item)=>item.quantity>0)
                }))
            },
            clearCart:()=>{
                set({
                    cart:[]
                })
            },
            
        }),
        {
            name:"foodhub-cart"
        }
    )
)

