import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/authService'

function Signup() {
    const [form, setForm] = useState({ email: "", password: "", name: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.createAccount(form);
            navigate("/home");
        } catch (error) {
            alert("Signup Failed");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
                <h1 className="text-2xl mb-4">Signup</h1>
                <input value={form.name} className="border p-2 mb-2 w-full" type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input value={form.email} className="border p-2 mb-2 w-full" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input value={form.password} className="border p-2 mb-4 w-full" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type='submit'>Signup</button>
            </form>
            <p className="text-center mt-4">
                Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
        </>
    );
};

export default Signup;
