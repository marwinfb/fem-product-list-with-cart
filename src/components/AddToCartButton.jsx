import icon_cart from "../assets/images/icon-add-to-cart.svg";

function AddToCartButton({className}) {
  return (
    <button className={`font-semibold text-sm rounded-full border py-[12.5px] px-[28px] inline-flex items-center justify-between whitespace-nowrap gap-x-2 min-w-[10rem] cursor-pointer bg-white border-primary-rose-400 text-primary-rose-900 hover:text-primary-red transition-colors shadow-sm ${className}`}><img src={icon_cart} alt="Cart Icon" width={20} height={20}/>Add to Cart</button>
  )
}
export default AddToCartButton