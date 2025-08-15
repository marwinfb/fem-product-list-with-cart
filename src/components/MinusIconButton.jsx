import icon_minus from "../assets/images/icon-decrement-quantity.svg";

function MinusIconButton({handleSubtractQuantity}) {
  return (
    <a className="border border-white rounded-full bg-transparent cursor-pointer flex items-center justify-center size-[20px] shrink-0" onClick={handleSubtractQuantity}>
      <img src={icon_minus} alt="Minus Icon" />
    </a>
  );
}
export default MinusIconButton;
