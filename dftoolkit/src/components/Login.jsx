// import React, { useState } from 'react';

// export default function Login() {
//   const [form, setForm] = useState({ emailOrUsername: '', password: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Implement login logic with Appwrite or your backend
//     console.log('Logging in with:', form);
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-4">
//       <div className="w-full max-w-md space-y-6">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900">Sign in to your account</h1>
//           <p className="mt-2 text-sm text-gray-600">
//             Access forensic tools and analysis
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-5 border border-gray-200">
//           <div>
//             <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700">
//               Email or Username
//             </label>
//             <input
//               type="text"
//               name="emailOrUsername"
//               id="emailOrUsername"
//               required
//               value={form.emailOrUsername}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-black focus:border-black"
//               placeholder="you@example.com or username"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               required
//               value={form.password}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-black focus:border-black"
//               placeholder="••••••••"
//             />
//           </div>

//           <div className="flex justify-between items-center">
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none"
//             >
//               Sign In
//             </button>
//           </div>

//           <p className="text-xs text-center text-gray-500 mt-4">
//             By signing in, you agree to our terms and privacy policy.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// export default function Login() {
//   const [form, setForm] = useState({ emailOrUsername: '', password: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Integrate with Appwrite login
//     console.log('Login submitted:', form);
//   };

//   return (
//     <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center font-serif px-4">
//       <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200">
//         <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Sign in to ForensicHub</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email or Username</label>
//             <input
//               type="text"
//               name="emailOrUsername"
//               required
//               value={form.emailOrUsername}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
//               placeholder="Enter email or username"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               required
//               value={form.password}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
//               placeholder="••••••••"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import dfimage from '../assets/dfimage.png'
// import dfimage from '../assets/dfimage.png'

export default function Login() {
  const [form, setForm] = useState({ emailOrUsername: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add Appwrite login logic
    console.log('Login submitted:', form);
  };

  return (
    // <div className="min-h-screen flex font-serif bg-[#fdfaf6]">
    //   {/* Left Side Image */}
    //   <div className="w-1/2 bg-cover bg-center" 
    //   // style={{ backgroundImage: `url(${dfimage})` }}
    //   style={{ backgroundImage: `url(${dfimage})` }}
    //   >
    //     {/* Placeholder or Forensics Image */}
    //   </div>

    //   {/* Right Side Form */}
    //   <div className="w-1/2 flex items-center justify-center px-10">
    //     <div className="w-full max-w-md space-y-6">
    //       <div className="text-center">
    //         <h1 className="text-3xl font-bold text-gray-900">Sign in to <span className="text-black">ForensicLab</span></h1>
    //         <p className="mt-3 text-sm text-gray-600">
    //           Access tools for digital investigation and analysis
    //         </p>
    //       </div>

    //       <form onSubmit={handleSubmit} className="space-y-5">
    //         <div>
    //           <label className="block text-sm text-gray-700 mb-1">Email or Username</label>
    //           <input
    //             type="text"
    //             name="emailOrUsername"
    //             value={form.emailOrUsername}
    //             onChange={handleChange}
    //             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
    //             placeholder="you@example.com or username"
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
    //             placeholder="••••••••"
    //             required
    //           />
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
    //         >
    //           Sign In
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen flex font-serif bg-[#fdfaf6]">
  {/* Left Side Image */}
  <div
    className="w-1/2 bg-cover bg-center"
    style={{ backgroundImage: `url(${dfimage})` }}
  >
    {/* Placeholder or Forensics Image */}
  </div>

  {/* Right Side Form */}
  <div className="w-1/2 flex items-center justify-center px-10">
    <div className="w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Sign in to <span className="text-black">Forensic Lab</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Access tools for digital investigation and analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg text-gray-700 mb-2">Username or Email</label>
          <input
            type="text"
            name="emailOrUsername"
            value={form.emailOrUsername}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="username or email id"
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
          Sign In
        </button>
      </form>
    </div>
  </div>
</div>

  );
}