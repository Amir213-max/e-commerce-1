import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./Pages/categoriesSlice";
import { Link } from "react-router-dom";
import { filter } from "./componants/Store/productSlice";

export default function Sidebar() {
    const categories = useSelector((state) => state.categoriesData.categories);

    const dispatch = useDispatch();
    const [active, setActive] = useState(false); // حالة الستارة

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const toggle = () => {
        setActive(!active); // عند الضغط على الأيقونة نغير حالة الستارة
    };

    const closeSidebar = () => {
        setActive(false); // غلق الستارة
    };

    const handleFilter = (category) => {
        dispatch(filter(category));
    };

    return (
        <div className="relative">
            {/* أيقونة التحكم */}
            <button
                className="fixed left-4  z-10 p-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
                onClick={toggle}
            >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </button>

            {/* الستارة العلوية */}
            <aside
                className={`fixed left-0 top-[64px] w-full bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${
                    active ? "translate-y-0" : "-translate-y-full"
                } p-6 z-40 h-[calc(65vh-64px)] overflow-y-auto`}
            >
                {/* زر الإغلاق */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition duration-300 text-4xl"
                    onClick={closeSidebar}
                >
                    &times;
                </button>

                <div className="flex flex-col items-center gap-6">
                    {/* عنوان الفئات */}
                    <h1 className="text-2xl font-bold text-gray-800">All Categories</h1>

                    {/* العناصر */}
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                to={`/filter`}
                                onClick={() => handleFilter(category.slug)}
                                className="text-gray-700 bg-gray-100 hover:bg-yellow-500 transition duration-300 px-4 py-2 border border-gray-200 rounded-lg"
                            >
                                {category.slug}
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
}
