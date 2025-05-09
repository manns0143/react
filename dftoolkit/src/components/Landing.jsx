// import React from 'react';

// export default function Landing() {
// //   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#fdfaf6] flex flex-col justify-between font-serif">
//       <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
//         <h1 className="text-2xl font-extrabold tracking-tight text-black">ForensicHub</h1>
//         <div className="space-x-4 text-sm font-medium text-gray-800">
//           <button 
//         //   onClick={() => navigate('/login')} 
//           className="hover:underline">Sign in</button>
//           <button 
//         //   onClick={() => navigate('/login')} 
//           className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
//             Start exploring
//           </button>
//         </div>
//       </header>

//       <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
//         <h2 className="text-5xl font-bold text-black leading-tight">
//           Digital Forensics Tools<br />& Investigative Knowledge
//         </h2>
//         <p className="mt-4 text-xl text-gray-700 max-w-2xl">
//           A place to explore and understand digital evidence, investigate files, and learn how to use forensic tools—all in one place.
//         </p>
//         <button
//         //   onClick={() => navigate('/login')}
//           className="mt-8 px-6 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800"
//         >
//           Start exploring
//         </button>
//       </main>

//       <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
//         &copy; {new Date().getFullYear()} ForensicHub. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import React from 'react';
import image from '../assets/image.png';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] flex flex-col justify-between font-serif">
      <header className="w-full flex justify-between items-center px-8 py-6 border-b border-black">
        <h1 className="text-3xl font-extrabold tracking-tight text-black cursor-pointer">
          Forensic Lab
        </h1>
        <div className="space-x-4 text-big font-medium text-gray-800">
          <button className="hover:underline cursor-pointer">Sign in</button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer">
            Start exploring
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-4">
        <div className="w-full md:w-1/2 text-left space-y-6 py-12">
          <h2 className="text-5xl font-bold text-black leading-tight">
            Digital Forensics Tools<br />& Investigative Knowledge
          </h2>
          <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
            A place to explore and understand digital evidence, investigate files,
            and learn how to use forensic tools—all in one place.
          </p>
          <button className="mt-4 px-6 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 cursor-pointer">
            Start exploring
          </button>
        </div>

        <div
          className="w-full md:w-1/2 min-h-[300px] md:min-h-[630px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </main>

      <footer className="text-center text-sm text-gray-500 py-4 border-t border-black">
        &copy; {new Date().getFullYear()} ForensicLab. All rights reserved.
      </footer>
    </div>
  );
}
