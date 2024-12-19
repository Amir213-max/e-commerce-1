/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import photo from '../assets/shopping_cart.9bdd8040b334d31946f4.png';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from './cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Posts() {
    const carts = useSelector((state) => state.carts);
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    return (
        <>
            {posts.length > 0 ? (
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative">
                                <img src={post.thumbnail} alt={post.title} className="w-full h-64 object-cover" />
                                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-lg">
                                    {post.discountPercentage}% OFF
                                </div>
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                                <p className="text-gray-600 text-sm mt-2">{post.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <div className="text-gray-800 font-semibold text-lg">
                                            {post.price}$ <span className="text-gray-500 line-through">{(post.price - (post.price * (post.discountPercentage / 100))).toFixed(1)}$</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCartShopping} className="text-gray-800 cursor-pointer" />
                                        <button
                                            className="text-sm font-semibold text-white bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-400"
                                            onClick={() => dispatch(addCart(post))}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="text-gray-600">Rating: {post.rating}</div>
                                    <div className="text-gray-600">Brand: {post.brand}</div>
                                    <div className="text-gray-600">Category: {post.category}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="container mx-auto flex flex-col items-center justify-center p-6">
                    <img src={photo} alt="Empty Cart" className="w-64 h-64 object-cover mb-4" />
                    <Link to="/" className="btn btn-success text-white bg-green-500 px-6 py-3 rounded-lg hover:bg-green-400">
                        Go To Shopping
                    </Link>
                </div>
            )}
        </>
    );
}
