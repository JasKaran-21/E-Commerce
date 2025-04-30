import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/authService';
import toast from 'react-hot-toast';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login(form);
            navigate("/home");
            toast.success("Login successful!");
        } catch {
            toast.error("Login failed. Please check your credentials.");
            // alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl mb-4">Login</h1>
            <input value={form.email} className="border p-2 mb-2 w-full" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input value={form.password} className="border p-2 mb-4 w-full" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full" type='submit'>Login</button>
            <p className="text-center mt-4">
                Don't have an account?{' '}
                <Link to="/" className="text-blue-600 hover:underline">
                    Sign up
                </Link>
            </p>
        </form>

        // <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
        //     <h1 className="text-2xl mb-4">Login</h1>

        //     <input
        //         value={form.email}
        //         className="border p-2 mb-2 w-full"
        //         type="email"
        //         placeholder="Email"
        //         onChange={(e) => setForm({ ...form, email: e.target.value })}
        //     />

        //     <input
        //         value={form.password}
        //         className="border p-2 mb-4 w-full"
        //         type="password"
        //         placeholder="Password"
        //         onChange={(e) => setForm({ ...form, password: e.target.value })}
        //     />

        //     <button className="bg-green-600 text-white px-4 py-2 rounded w-full" type='submit'>
        //         Login
        //     </button>

        //     {/* Signup Link */}
        //     <p className="text-center text-sm mt-4">
        //         Don't have an account?{' '}
        //         <Link to="/signup" className="text-blue-600 hover:underline">
        //             Sign up
        //         </Link>
        //     </p>
        // </form>

    );
};

export default Login;
