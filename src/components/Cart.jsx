import illustration_empty_cart from "../assets/images/illustration-empty-cart.svg";
import CartItem from "./CartItem";
import CartCarbonNeutral from "./CartCarbonNeutral";
import ConfirmOrderButton from "./ConfirmOrderButton";
import CartTotal from "./CartTotal";

function Cart() {
  return (
    <section className="col-span-full rounded-xl p-6 min-h-[18.6875rem] bg-white lg:col-start-9 lg:-col-end-1">
      <h2 className="font-bold text-2xl text-primary-red">Your Cart (7)</h2>
      <div className="flex flex-col items-center gap-y-4 py-4 pt-6">
        <img src={illustration_empty_cart} alt="Cake Illustation" width={128} height={128} />
        <p className="font-semibold text-sm text-primary-rose-500">Your added items will appear here</p>
      </div>
      <div className="mt-6 flex flex-col divide-y divide-primary-rose-100">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <hr class="h-px mb-6 bg-primary-rose-100 border-0"></hr>

      <div className="space-y-6">
        <CartTotal />
        <CartCarbonNeutral />
        <ConfirmOrderButton />
      </div>
    </section>
  )
}
export default Cart