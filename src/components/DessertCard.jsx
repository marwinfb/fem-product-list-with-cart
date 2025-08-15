import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import ResponsiveImage from "./ResponsiveImage";
import DessertInfo from "./DessertInfo";

function DessertCard({ image, name, category, price }) {
 const [addCart, setAddCart] = useState(false);
 const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!addCart) {
      setAddCart(!addCart);
      console.log(`Added ${name} to cart`);
    }
  }

  const handleAddQuantity = () => {
    if (addCart) {
      setQuantity(quantity + 1);
      console.log(`Increased quantity of ${name} to ${quantity + 1}`);
    }
  }

  const handleSubtractQuantity = () => {
    if (addCart) {
      setQuantity(quantity - 1);
      console.log(`Increased quantity of ${name} to ${quantity - 1}`);
    }
  }

  return (
    <article className="">
      <div className="relative group">
        <div className="w-full h-auto overflow-hidden rounded-lg">
          <ResponsiveImage image={image} alt={name} />
        </div>
        <AddToCartButton 
          className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2"
          onClick={handleAddToCart}
          addCart={addCart}
          quantity={quantity}
          handleAddQuantity={handleAddQuantity}
          handleSubtractQuantity={handleSubtractQuantity}
        />
      </div>

      <DessertInfo name={name} category={category} price={price} />
    </article>
  );
}
export default DessertCard;
