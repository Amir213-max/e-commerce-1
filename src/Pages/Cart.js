/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import photo from '../assets/shopping_cart.9bdd8040b334d31946f4.png'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrease, deleteCart, increase } from './cartSlice';
import { Link } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cart() {
    const carts = useSelector((state) => state.carts);
    const dispatch = useDispatch();

    const totalPrice = carts.reduce((acc, cart) => {
        acc += ((cart.price - (cart.price * (cart.discountPercentage / 100))) * cart.quantity);
        return acc;
    }, 0);

    return (
        <>
            {carts.length > 0 ? (
                <div className="mt-5 py-5 container mx-auto">
                    <table className="table-auto w-full border-separate overflow-y-auto border-spacing-2">
                        <thead>
                            <tr>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">#</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Product</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Brand</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Unit Price</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Quantity</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Total Price</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((cart) => (
                                <tr key={cart.id} className="hover:bg-gray-100">
                                    <td className="text-center py-2"></td>
                                    <td className="py-2 px-4">
                                        <img src={cart.thumbnail} alt={cart.name} className="w-16 h-16 object-cover rounded-lg shadow-md" />
                                    </td>
                                    <td className="py-2 px-4">{cart.brand}</td>
                                    <td className="py-2 px-4">{(cart.price - (cart.price * (cart.discountPercentage / 100))).toFixed(2)} $</td>
                                    <td className="py-2 px-4 flex items-center justify-center space-x-2">
                                        <button
                                            className="text-black text-2xl  px-2 py-1 rounded-full hover:scale-150"
                                            onClick={() => dispatch(decrease(cart))}
                                        >
                                            -
                                        </button>
                                        <div className="text-center font-semibold">{cart.quantity}</div>
                                        <button
                                            className=" text-black text-2xl  px-2 py-1 rounded-full hover:scale-150"
                                            onClick={() => dispatch(increase(cart))}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="py-2 px-4">{((cart.price - (cart.price * (cart.discountPercentage / 100))) * cart.quantity).toFixed(2)} $</td>
                                    <td className="py-2 px-4">
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => dispatch(deleteCart(cart))}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-xl font-semibold text-purple-700">
                            <h2>Total Price: {totalPrice.toFixed(2)} $</h2>
                        </div>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                                onClick={() => dispatch(clearCart())}
                            >
                                Clear Cart
                            </button>
                            <button
                                type="button"
                                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto flex flex-col items-center justify-center py-10">
                    <div className="mb-4">
                        <img src={photo} alt="Empty cart" className="w-32 h-32 object-cover rounded-full shadow-lg" />
                    </div>
                    <Link
                        to="/"
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                    >
                        Go To Shopping
                    </Link>
                </div>
            )}
        </>
    );
}
