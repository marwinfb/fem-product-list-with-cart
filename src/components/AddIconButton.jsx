import icon_add from "../assets/images/icon-increment-quantity.svg";

function AddIconButton({handleAddQuantity}) {
  return (
    <a className="border border-white rounded-full bg-transparent cursor-pointer flex items-center justify-center size-[20px] shrink-0" onClick={handleAddQuantity}>
      <img src={icon_add} alt="Add Icon" />
    </a>
  );
}
export default AddIconButton;
