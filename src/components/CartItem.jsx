import icon_remove_item from "../assets/images/icon-remove-item.svg";

function CartItem({name}) {
  return (
    <div className="flex items-center justify-between py-4">
        <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-sm">Classic Teramisu</p>
            <p className="inline-flex items-center gap-x-2">
                <span className="font-semibold text-sm text-primary-red">1x</span>
                <span className="font-normal text-sm text-primary-rose-500">@ $5.50</span>
                <span className="font-semibold text-sm text-primary-rose-500">$5.50</span>
            </p>
        </div>
        <button className="cursor-pointer size-5 p-[4.38px] border border-primary-rose-400 rounded-full inline-flex items-center justify-center">
          <img src={icon_remove_item} alt="Remove Icon" width={8.75} height={8.75} />
        </button>
    </div>
  )
}
export default CartItem