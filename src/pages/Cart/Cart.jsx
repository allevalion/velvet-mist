import { CartContext } from '@/context/CartContext';
import styles from './Cart.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Cart = () => {
  const titleSplit = new SplitText('h1', { type: 'chars' });

  titleSplit.chars.forEach((char) => char.classList.add('text-gradient'));
  gsap.from(titleSplit.chars, {
    yPercent: 20,
    duration: 0.8,
    ease: 'expo.out',
    stagger: 0.06,
  });

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className={styles.page}>
      <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="mb-4 text-xl font-semibold">Your cart is empty</h2>
          <Link
            to="/velvet-mist/catalog"
            className="px-8 py-4 font-medium text-black bg-yellow hover:bg-[#d6c27f] active:bg-[#c0af6a] rounded-full text-lg inline-flex justify-center items-center"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 gap-6">
              {cartItems.map((item) => (
                <div
                  className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
                  key={item.id}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="object-cover w-20 h-20 rounded-md"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-600">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={() => removeFromCart(item)}
                      variant="badge"
                      style="px-3.5 py-1"
                    >
                      <span className="sr-only">Decrease quantity</span>
                      <span className="text-lg font-extrabold">-</span>
                    </Button>
                    <span className="w-8 font-medium text-center">
                      {item.quantity}
                    </span>
                    <Button
                      onClick={() => addToCart(item)}
                      variant="badge"
                      style="px-[0.8em] py-1"
                    >
                      <span className="sr-only">Increase quantity</span>
                      <span className="text-lg font-extrabold">+</span>
                    </Button>
                    <div className="w-20 font-semibold text-right">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-4xl pt-6 border-t">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Total: {formatPrice(getCartTotal())}
              </h2>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                variant="badge"
                style="text-lg hover:bg-gray-200 px-12 py-6"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Link
                to="/velvet-mist/checkout"
                className="px-6 py-2 font-medium text-black bg-yellow hover:bg-[#d6c27f] active:bg-[#c0af6a] rounded-full text-lg inline-flex justify-center items-center"
              >
                Proceed to Order
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
