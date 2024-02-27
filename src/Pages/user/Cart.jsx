import CartCard from "../../components/Dyaamic/CartCard"
import CartList from "../../components/Dyaamic/CartList"

function Cart() {
  return (
    <section className="flex flex-col min-[1090px]:flex-row justify-between border-2 m-4">
        <div className="min-[1090px]:w-1/2">
        <CartList/>
        </div>
        <div className="min-[1090px]:w-1/3  min-w-[200px] ms-4 ">
        <CartCard/>

        </div>
    </section>
  )
}

export default Cart