import React from 'react';

export default function UploadResults() {
  const dummyResults = [
    {
      fileName: 'report_autopsy.pdf',
      toolUsed: 'Autopsy',
      date: 'May 9, 2025',
    },
    {
      fileName: 'network_analysis.csv',
      toolUsed: 'Wireshark',
      date: 'May 8, 2025',
    },
    {
      fileName: 'memory_report.txt',
      toolUsed: 'Volatility',
      date: 'May 7, 2025',
    },
    {
      fileName: 'metadata_screenshot.png',
      toolUsed: 'ExifTool',
      date: 'May 6, 2025',
    },
    {
      fileName: 'hash_results.md5',
      toolUsed: 'Hash Calculator',
      date: 'May 5, 2025',
    },
    {
      fileName: 'timeline_plaso.csv',
      toolUsed: 'Plaso',
      date: 'May 4, 2025',
    }
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
      <main className="flex-grow px-8 py-10">
        {/* Upload Button */}
        <div className="flex justify-center mb-10">
          <button className="bg-black text-white px-50 py-5 text-2xl rounded-full hover:bg-gray-800 cursor-pointer transition-all">
            Upload Results
          </button>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-black mb-6">Your Results</h2>

        {/* Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyResults.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-md transition text-left">
              <h3 className="text-lg font-semibold text-black mb-2">{item.fileName}</h3>
              <p className="text-gray-700 mb-1">Tool Used: <span className="font-medium">{item.toolUsed}</span></p>
              <p className="text-gray-600 mb-4">Uploaded on {item.date}</p>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-sm">
                Download
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