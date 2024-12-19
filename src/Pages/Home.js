import React from 'react';
import Slider from '../componants/Slider';
import Products from '../componants/Products';
import Sidebar from '../Sidebar';

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="w-full lg:w-1 bg-gray-100 shadow-md p-4">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white p-4">
                <div className="container mx-auto">
                    {/* Slider */}
                    <div className="mb-8">
                        <Slider />
                    </div>

                    {/* Products */}
                    <div>
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    );
}
