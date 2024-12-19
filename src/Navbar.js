import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faCartShopping, faHouse, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchProducts } from './componants/Store/productSlice';
import { auth } from './componants/Firebase/firebase'; // تأكد من مسار firebaseConfig
import { signOut } from 'firebase/auth';

export default function Navbar() {
    const cart = useSelector((state) => state.carts);
    const post = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false); // حالة لإظهار/إخفاء شريط البحث في الشاشات الصغيرة

    const handleSearch = (e) => {
        const value = e.target.value || "";
        setSearchTerm(value);
        dispatch(searchProducts(value)); // تصفية المنتجات بناءً على القيمة
    };

    const toggleSearchBar = () => {
        setIsSearchVisible(!isSearchVisible); // التبديل بين إظهار وإخفاء شريط البحث
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                // هنا يمكنك إعادة توجيه المستخدم إلى صفحة تسجيل الدخول بعد الخروج
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <div className="relative">
            {/* Navbar */}
            <nav className="bg-gray-100 text-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-sans font-bold hover:text-yellow-600 transition duration-300"
                    >
                        GOOSHOP
                    </Link>

                    {/* Search Icon (on small screens only) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleSearchBar}
                            className="text-gray-500 text-2xl focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>

                    {/* Search Bar (visible always on large screens) */}
                    <div className="relative w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto hidden md:block">
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 md:text-gray-400 text-lg md:text-xl"
                            />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 shadow-md text-sm md:text-base bg-white placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex space-x-6">
                        <Link to="/" className="text-lg hover:text-yellow-400 transition duration-300">
                            <FontAwesomeIcon icon={faHouse} size="xl" />
                        </Link>
                        <div className="relative">
                            <Link to="/post" className="text-lg hover:text-yellow-500 transition duration-300">
                                <FontAwesomeIcon icon={faBoxesPacking} size="xl" />
                            </Link>
                            <span className="absolute bottom-5 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                {post.length}
                            </span>
                        </div>
                        <div className="relative">
                            <Link to="/cart" className="text-lg hover:text-yellow-500 transition duration-300">
                                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                            </Link>
                            <span className="absolute bottom-5 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        </div>

                        {/* Sign Out Button */}
                        <button
                            onClick={handleSignOut}
                            className="text-lg text-red-500 hover:text-red-700 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} size="xl" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Search Bar (visible only on small screens when toggled) */}
            {isSearchVisible && (
                <div className="md:hidden z-10 fixed top-0 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform translate-y-12">
                    <div className="flex items-center py-3 px-4 border-b border-gray-300">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
                        />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 shadow-md text-sm bg-white placeholder-gray-400"
                        />
                    </div>
                </div>
            )}

            {/* Main content starts just below the navbar */}
            <main className="pt-20">
                {/* Your page content goes here */}
            </main>
        </div>
    );
}
