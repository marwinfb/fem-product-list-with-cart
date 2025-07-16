import AddToCartButton from "./AddToCartButton"
import ResponsiveImage from "./ResponsiveImage"
import DessertInfo from "./DessertInfo"

function DessertCard({ image, name, category, price }) {
  return (
    <article className="">
        <div className="relative">
          <div className="w-full h-auto overflow-hidden rounded-lg">
            <ResponsiveImage image={image} alt={name} />
          </div>

          <AddToCartButton className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 " />
        </div>

        <DessertInfo name={name} category={category} price={price} />
    </article>
  )
}
export default DessertCard