import React, { useState } from 'react';
import dfimage from '../assets/dfimage.png'

export default function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add Appwrite account creation logic
        console.log('Registration submitted:', form);
    };

    return (
        // <div className="min-h-screen flex font-serif bg-[#fdfaf6]">
        //   {/* Left Side Image */}
        //   <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${dfimage})` }}>
        //     {/* Placeholder or Forensics Image */}
        //   </div>

        //   {/* Right Side Form */}
        //   <div className="w-1/2 flex items-center justify-center px-10">
        //     <div className="w-full max-w-md space-y-6">
        //       <div className="text-center">
        //         <h1 className="text-3xl font-bold text-gray-900">Create an account on <span className="text-black">Forensic Lab</span></h1>
        //         <p className="mt-3 text-sm text-gray-600">
        //           Start your journey into digital forensic investigation
        //         </p>
        //       </div>

        //       <form onSubmit={handleSubmit} className="space-y-5">
        //         <div>
        //           <label className="block text-sm text-gray-700 mb-1">Username</label>
        //           <input
        //             type="text"
        //             name="username"
        //             value={form.username}
        //             onChange={handleChange}
        //             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
        //             placeholder="your username"
        //             required
        //           />
        //         </div>

        //         <div>
        //           <label className="block text-sm text-gray-700 mb-1">Email</label>
        //           <input
        //             type="email"
        //             name="email"
        //             value={form.email}
        //             onChange={handleChange}
        //             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
        //             placeholder="you@example.com"
        //             required
        //           />
        //         </div>

        //         <div>
        //           <label className="block text-sm text-gray-700 mb-1">Password</label>
        //           <input
        //             type="password"
        //             name="password"
        //             value={form.password}
        //             onChange={handleChange}
        //             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
        //             placeholder="Create a strong password"
        //             required
        //           />
        //         </div>

        //         <button
        //           type="submit"
        //           className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        //         >
        //           Create Account
        //         </button>
        //       </form>
        //     </div>
        //   </div>
        // </div>

        <div className="min-h-screen flex font-serif bg-[#fdfaf6]">
            {/* Left Side Image */}
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${dfimage})` }}>
                {/* Placeholder or Forensics Image */}
            </div>

            {/* Right Side Form */}
            <div className="w-1/2 flex items-center justify-center px-10">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900">Create an account on <span className="text-black">Forensic Lab</span></h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Start your journey into digital forensic investigation
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-lg text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="username"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="email id"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition cursor-pointer"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}