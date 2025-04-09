import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/authService';

const Dashboard = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await authService.logout();
        navigate("/login");
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl mb-4">Welcome to the Dashboard</h1>
            <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;
