import MainProvider from "@/components/Main"
import OrdersMain from "@/pages/order/OrdersMain"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Orders",
  description: 'View orders',
}

const page = () => {
  return (
    <div className="w-full" >
      <MainProvider>
        <OrdersMain/>
      </MainProvider>
    </div>
  )
}

export default page