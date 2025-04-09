import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../appwrite/authService';

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        authService.getCurrentUser().then(user => {
            setAuth(!!user);
            setLoading(false);
        });
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;

    return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
