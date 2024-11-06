import OrdersMain from "@/components/pages/order/OrdersMain"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Orders",
  description: 'View orders',
}

const page = () => {
  return (
    <div className="w-full" >
        <OrdersMain/>
    </div>
  )
}

export default page