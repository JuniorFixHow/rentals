import CarPayment from "@/features/CarPayment"
import Map from "@/features/Map"
import { CarProps } from "@/types/Types"

const PaymentSide = ({car}:{car:CarProps}) => {
  return (
    <div className="flex flex-col gap-8 grow" >
        <Map/>
        <CarPayment car={car} />
    </div>
  )
}

export default PaymentSide