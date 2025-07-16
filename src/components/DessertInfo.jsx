function DessertInfo({name, category, price}) {
  return (
    <div className="mt-8">
        <h4 className="font-normal text-sm text-primary-rose-500">{category}</h4>
        <h3 className="font-semibold text-base text-primary-rose-900 grow">{name}</h3>
        <p className="font-semibold text-base text-primary-red">${price.toFixed(2)}</p>
    </div>
  )
}
export default DessertInfo