import React from 'react';

export default function Home() {
  const dummyActivity = [
    {
      tool: 'Autopsy',
      action: 'Analyzed disk image',
      date: 'May 9, 2025, 10:12 AM'
    },
    {
      tool: 'Wireshark',
      action: 'Captured and filtered network packets',
      date: 'May 8, 2025, 6:45 PM'
    },
    {
      tool: 'Volatility',
      action: 'Parsed memory dump from infected system',
      date: 'May 7, 2025, 2:32 PM'
    },
    {
      tool: 'Hash Calculator',
      action: 'Verified MD5 hash of evidence.zip',
      date: 'May 6, 2025, 11:08 AM'
    },
    {
      tool: 'NetworkMiner',
      action: 'Extracted files from PCAP session',
      date: 'May 5, 2025, 3:20 PM'
    },
    {
      tool: 'ExifTool',
      action: 'Read metadata from suspect image',
      date: 'May 4, 2025, 9:30 AM'
    },
    {
      tool: 'Binwalk',
      action: 'Scanned firmware image for hidden files',
      date: 'May 3, 2025, 4:17 PM'
    },
    {
      tool: 'Strings',
      action: 'Extracted readable strings from binary',
      date: 'May 2, 2025, 10:45 AM'
    },
    {
      tool: 'Foremost',
      action: 'Carved deleted files from disk image',
      date: 'May 1, 2025, 7:55 PM'
    },
    {
      tool: 'Plaso',
      action: 'Created timeline from system logs',
      date: 'Apr 30, 2025, 2:10 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf6] flex flex-col font-serif">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 border-b border-black">
        <h1 className="text-3xl font-extrabold tracking-tight text-black cursor-pointer">Forensic Lab</h1>
        <div className="flex gap-4">
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Explore Tools</button>
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Your Evidence</button>
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Your Results</button>
          <button className="bg-black text-white w-40 text-center px-4 py-2 rounded-full hover:bg-gray-800 cursor-pointer text-base">Logout</button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row flex-1 px-8 py-10 gap-10">
        {/* Welcome Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-5xl font-bold text-black mb-4">Welcome back, John Doe</h2>
            <br />
            <p className="text-2xl text-gray-700 leading-relaxed max-w-xl whitespace-pre-wrap">What would you like to do today?</p>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl whitespace-pre-wrap">
                <ul>
                    <li>• Start a new investigation</li>
                    <li>• Upload and examine case evidence</li>
                    <li>• Run a digital forensic tool</li>
                    <li>• View your previous results</li>
                    <li>• Continue where you left off</li>
                </ul>
          </p>
        </div>

        {/* Recent Activity Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-black mb-4">Recent Activity</h3>
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b">Tool</th>
                  <th className="px-4 py-3 border-b">Action</th>
                  <th className="px-4 py-3 border-b">Date</th>
                </tr>
              </thead>
              <tbody>
                {dummyActivity.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b text-black">{activity.tool}</td>
                    <td className="px-4 py-3 border-b text-gray-700">{activity.action}</td>
                    <td className="px-4 py-3 border-b text-gray-600">{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-black">
        &copy; {new Date().getFullYear()} Forensic Lab. All rights reserved.
      </footer>
    </div>
  );
}