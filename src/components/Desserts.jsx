import data from "../data/data.json";
import DessertCard from "./DessertCard";

function Desserts() {
  return (
    <section className="col-span-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:col-start-1 lg:col-end-9">
        {data.map((item, index) => (
        <DessertCard 
            key={index}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
        />
        ))}
    </section>
  )
}
export default Desserts