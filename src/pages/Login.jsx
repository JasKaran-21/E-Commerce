import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/authService';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login(form);
            navigate("/dashboard");
        } catch {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl mb-4">Login</h1>
            <input className="border p-2 mb-2 w-full" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className="border p-2 mb-4 w-full" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full" type='submit'>Login</button>
        </form>
    );
};

export default Login;
