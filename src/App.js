import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './componants/Firebase/firebase'; // تأكد من مسار firebaseConfig
import Cart from './Pages/Cart';
import Posts from './Pages/Posts';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import ProductCategory from './Pages/productCategory';
import { AuthProvider } from './componants/auth/AuthProvider';
import SignUp from './componants/auth/signUp';
import Login from './componants/auth/login';
import ProtectedRoute from './componants/auth/ProtectedRoute';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // تحقق من حالة المستخدم عند تحميل الصفحة
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe(); // تنظيف الاشتراك
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="App">
            <AuthProvider>
                {/* إذا كان المستخدم غير مسجل الدخول، يتم توجيهه إلى صفحة تسجيل الدخول */}
                {!user ? (
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                ) : (
                    <>
                        {/* Navbar و Footer يظهران فقط في الصفحات الأخرى */}
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                            <Route path="/post" element={<ProtectedRoute><Posts /></ProtectedRoute>} />
                            <Route path="/filter" element={<ProtectedRoute><ProductCategory /></ProtectedRoute>} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </AuthProvider>
        </div>
    );
}

export default App;
