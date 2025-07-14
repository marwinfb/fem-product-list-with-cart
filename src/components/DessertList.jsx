import Container from "./Container"
import Cart from "./Cart"
import Desserts from "./Desserts"

function DessertList() {
  return (
    <Container>
      <h1 className="font-bold text-[2.5rem] leading-[1.2] mb-8 text-primary-rose-900">Desserts</h1>
      <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12 lg:items-start">
        <Desserts />
        <Cart />
      </div>
    </Container>
  )
}
export default DessertList