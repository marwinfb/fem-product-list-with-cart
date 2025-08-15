import CartIcon from "./CartIcon";
import AddIconButton from "./AddIconButton";
import MinusIconButton from "./MinusIconButton";

function AddToCartButton({ className, onClick, addCart, quantity, handleAddQuantity, handleSubtractQuantity }) {
  return (
    <button className={`font-semibold text-sm rounded-full py-[12.5px] px-[28px] whitespace-nowrap w-[70%] inline-flex items-center justify-center cursor-pointer transition-colors shadow-sm  ${className} ${addCart ? "bg-primary-red text-white border border-primary-red" : "bg-white text-primary-rose-900 hover:text-primary-red border border-primary-rose-400"}`} onClick={onClick}>
      {
        addCart ? <span className="inline-flex items-center justify-between gap-x-2 w-full"><MinusIconButton handleSubtractQuantity={handleSubtractQuantity} /> <span className="block">{quantity}</span> <AddIconButton handleAddQuantity={handleAddQuantity} /></span> : <span className="inline-flex items-center justify-between gap-x-2"><CartIcon /> Add to cart</span>
      }
    </button>
  );
}
export default AddToCartButton;
