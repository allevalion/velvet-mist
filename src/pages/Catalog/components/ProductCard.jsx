import { cartIcon } from '@/assets/icons';
import Button from '@/components/Button';
import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';

const ProductCard = ({
  id,
  name,
  category,
  detail,
  price,
  image,
  description,
  badge,
}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      id,
      title: name,
      price: Number(price) || 0,
      thumbnail: image,
      name,
      image,
    };

    // console.log('Adding to cart:', product); // debug
    addToCart(product);
  };

  return (
    <div className="relative p-8 background-gradient">
      <div className="noisy" />
      <div className="gap-4 col-center">
        {badge && (
          <span className="absolute z-50 right-5 top-5 badge">{badge}</span>
        )}
        <img
          className="object-cover w-full h-full max-w-60 max-h-60"
          src={image}
          alt=""
        />
        <h2 className="text-4xl text-bright">{name}</h2>
        <p className="text-lg text-center">{description}</p>
        <div className="gap-10 mt-4 text-base flex-center">
          <span>{category?.[0]?.toUpperCase() + category?.slice(1)}</span>
          <span>{detail}</span>
          <span>${price}</span>
        </div>
        <Button
          variant="badge"
          style="mt-2 w-full z-50 px-12 py-6"
          onClick={handleAddToCart}
        >
          <span>Add to Cart</span>
          <img src={cartIcon} aria-hidden="true" className="h-[1.5em] " />
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
