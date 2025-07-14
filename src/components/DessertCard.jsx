import AddToCartButton from "./AddToCartButton"
import ResponsiveImage from "./ResponsiveImage"

function DessertCard({ image, name, category, price }) {
  return (
    <article className="">
        <div className="relative">
          <div className="w-full h-auto overflow-hidden rounded-lg">
            <ResponsiveImage image={image} alt={`${name} dessert`}/>
          </div>

          <AddToCartButton />
        </div>

        <div className="mt-8">
            <h4 className="font-normal text-sm text-primary-rose-500">{category}</h4>
            <h3 className="font-semibold text-base text-primary-rose-900 grow">{name}</h3>
            <p className="font-semibold text-base text-primary-red">{`$${price}`}</p>
        </div>
    </article>
  )
}
export default DessertCard