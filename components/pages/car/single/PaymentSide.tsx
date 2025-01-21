// import CarPayment from "@/components/features/CarPayment"
import Map from "@/components/features/Map"
import { CarProps } from "@/types/Types"

const PaymentSide = ({car}:{car:CarProps}) => {
  console.log(car?.name);
  return (
    <div className="flex flex-col gap-8 grow" >
        <Map/>
        {/* <CarPayment car={car} /> */}
    </div>
  )
}

export default PaymentSide