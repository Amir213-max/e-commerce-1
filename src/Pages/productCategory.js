/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../componants/products.css'
import { addPost } from './postsSlice';
import { fil } from './filterSlice';
// import { loading } from '../componants/Store/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { loading } from '../componants/Store/productSlice';

export default function ProductCategory() {

    // eslint-disable-next-line no-unused-vars
    const products = useSelector((state) => state.data.product);
    const dispatch = useDispatch();




 return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {loading ? (
                <div className="flex justify-center items-center col-span-full">
                    <div className="loader flex space-x-2">
                        <div className="circle w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                        <div className="circle w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                        <div className="circle w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                        <div className="circle w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                    </div>
                </div>
            ) : (
                products?.map((product) => (
                    product && (
                        <Link
                            to={'/post'}
                            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
                            key={product.id}
                            onClick={() => dispatch(addPost(product))}
                        >
                            <div className="relative">
                                <img
                                    src={product.thumbnail || '/path/to/fallback.jpg'}
                                    alt={product.title || 'Product Image'}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">{product.category}</span>
                            </div>
                            <p className="mt-2 text-lg font-semibold">{product.title}</p>
                            <p className="text-gray-500">Brand: {product.brand}</p>
                            <div className="mt-3 flex justify-between items-center">
                                <div className="text-sm text-gray-600 flex items-center gap-2">
                                    <span className="line-through text-red-500">{product.price}$</span>
                                    <span className="text-green-500 font-semibold">
                                        {(product.price && product.discountPercentage
                                            ? (product.price - product.price * (product.discountPercentage / 100)).toFixed(2)
                                            : 'N/A') + '$'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-xs hover:bg-blue-600 flex items-center gap-1">
                                        <span>Details</span>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    )
                ))
            )}
        </div>
    );
}
