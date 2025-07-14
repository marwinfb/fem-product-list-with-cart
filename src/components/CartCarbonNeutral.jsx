import icon_carbon_neutral from "../assets/images/icon-carbon-neutral.svg";

function CartCarbonNeutral() {
  return (
    <div className="rounded-lg bg-primary-rose-50 w-full p-4 flex items-center justify-center">
        <div className="flex items-center gap-x-2">
            <img src={icon_carbon_neutral} alt="Carbon Neutral Icon" />
            <p className="font-normal text-primary-rose-900">This is a <span className="font-semibold text-primary-rose-900">carbon-neutral</span> delivery</p>  
        </div>
    </div>
  )
}
export default CartCarbonNeutral