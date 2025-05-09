import React from 'react';

export default function Tools() {
  const categories = [
    'Disk Forensics',
    'Memory Forensics',
    'Network Forensics',
    'Log and Event Analysis',
    'Email Forensics',
    'Mobile Forensics',
    'Multimedia Forensics',
    'File Carving & Recovery',
    'OSINT & Web Forensics'
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf6] flex flex-col font-serif">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 border-b border-black">
        <h1 className="text-3xl font-extrabold tracking-tight text-black cursor-pointer">
          Forensic Lab
        </h1>
        <div className="flex gap-4">
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Explore Tools</button>
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Your Evidence</button>
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Your Results</button>
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-8 py-10 flex flex-col">
        <h2 className="text-2xl font-bold text-black mb-4">Explore Tool Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {categories.map((category, index) => (
            <div key={index} className="flex">
              <button
                className="flex-grow w-full bg-black text-white text-xl py-6 px-6 rounded-xl hover:bg-gray-800 cursor-pointer transition-all"
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-black">
        &copy; {new Date().getFullYear()} Forensic Lab. All rights reserved.
      </footer>
    </div>
  );
}