import React from 'react';

export default function Disk() {
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

      {/* Main Content */}
      <main className="flex-grow px-8 py-10 space-y-12">
        {/* Category Description */}
        <section>
          <h2 className="text-4xl font-bold text-black mb-2">Disk Forensics</h2>
          <p className="text-lg text-gray-700 w-full">
            Disk forensics involves the process of analyzing storage devices such as hard drives, SSDs, and external media to recover, identify, and investigate data that may be relevant to legal or investigative procedures. It focuses on the extraction and examination of files, system artifacts, and metadata to uncover hidden or deleted information, ensuring the integrity of digital evidence in a forensic context.
          </p>
        </section>

        {/* Tool 1: Autopsy */}
        <section className="space-y-6">
          <h3 className="text-3xl font-semibold text-black">Autopsy</h3>
          <article className="text-gray-800 whitespace-pre-wrap text-lg leading-relaxed">
            <h4 className="mt-6 font-semibold">Your First Look at Digital Sleuthing with Autopsy!</h4>
            <p>
              Imagine you're a detective, but instead of fingerprints, you're looking for clues on computers and phones.
              That's what digital forensics is all about, and Autopsy is like your super-powered magnifying glass!
            </p>

            <h4 className="mt-6 font-semibold">What Exactly Is Autopsy?</h4>
            <p>
              Think of Autopsy as a free, open-source tool that helps you explore the digital world of hard drives,
              smartphones, and other storage devices. It's like a special file explorer that can do some amazing things:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Bring Back Lost Files:</strong> Find documents, photos, or other files that someone thought were deleted.</li>
              <li><strong>Spot Hidden Secrets:</strong> Uncover data that might be hidden away or even disguised.</li>
              <li><strong>Follow Digital Footprints:</strong> Look at internet history, emails, and chats to see what someone was doing.</li>
              <li><strong>Find Digital Bad Guys:</strong> Help detect if there's any sneaky software (like malware) or suspicious activity on a device.</li>
            </ul>

            <h4 className="mt-6 font-semibold">When Might You Use This Cool Tool?</h4>
            <ul className="list-decimal pl-6">
              <li><strong>Oops! They Deleted It:</strong> When you need to find files that were accidentally or intentionally removed.</li>
              <li><strong>Something's Not Right:</strong> If you suspect a computer has been hacked or someone has been snooping around.</li>
              <li><strong>Exploring a Device:</strong> When you need to carefully examine a computer or phone that might contain important information.</li>
              <li><strong>Becoming a Digital Detective:</strong> If you're interested in learning how digital investigations work, Autopsy is a great place to start practicing!</li>
            </ul>

            <h4 className="mt-6 font-semibold">What Kind of Digital Evidence Can Autopsy Look At?</h4>
            <ul className="list-disc pl-6">
              <li><strong>.E01:</strong> A common format used by professionals because it keeps extra information about the original device.</li>
              <li><strong>.dd/.img:</strong> Exact copies of a drive, without compression.</li>
              <li><strong>.vmdk:</strong> Virtual hard drive files.</li>
              <li><strong>Smartphone Images:</strong> Backups from Android (via ADB) or iPhones.</li>
            </ul>

            <h4 className="mt-6 font-semibold">What Kind of Clues Can Autopsy Help You Uncover?</h4>
            <ul className="list-disc pl-6">
              <li><strong>Files That Were "Gone":</strong> Even if deleted, Autopsy might still find them.</li>
              <li><strong>Data in Disguise:</strong> Detect disguised or hidden system files.</li>
              <li><strong>Where They've Been Online:</strong> See websites visited or files downloaded.</li>
              <li><strong>Digital Conversations:</strong> View email or chat records.</li>
              <li><strong>Windows Secrets:</strong> Analyze Windows registry information.</li>
              <li><strong>The Story of Files:</strong> Track creation, modification, and deletion timestamps.</li>
            </ul>

            <h4 className="mt-6 font-semibold">Let's Get Autopsy on Your Computer!</h4>
            <ol className="list-decimal pl-6">
              <li><strong>Grab it Here:</strong> Go to <a href="https://autopsy.com/download" target="_blank" className="text-blue-600 underline">autopsy.com/download</a></li>
              <li><strong>Start the Setup:</strong> Run the installer file.</li>
              <li><strong>Say "Yes" to the Rules:</strong> Accept license agreement.</li>
              <li><strong>Let it Install in the Default Spot:</strong> Recommended for most users.</li>
              <li><strong>Make it Easy to Find:</strong> Optionally check "Add to PATH".</li>
              <li><strong>Finish the Job:</strong> Click Install, then Finish.</li>
              <li><strong>Make Sure It Works:</strong> Launch Autopsy from Programs.</li>
            </ol>

            <h4 className="mt-6 font-semibold">Getting a Practice Disk Image to Play With</h4>
            <ol className="list-decimal pl-6">
              <li><strong>Head to Digital Corpora:</strong> Find sample images.</li>
              <li><strong>Look for "nps-2009-domexusers.E01":</strong> Good beginner image.</li>
              <li><strong>Save it Somewhere You'll Remember:</strong> e.g., C:\Forensics\Samples\</li>
            </ol>

            <h4 className="mt-6 font-semibold">Let's Create Your First Case!</h4>
            <ol className="list-decimal pl-6">
              <li>Launch Autopsy → Click "New Case"</li>
              <li>Name your project</li>
              <li>Select a Base Directory</li>
              <li>Click "Add Data Source" → Select "Disk Image or VM File"</li>
              <li>Point to the sample image (.E01 file)</li>
              <li>Let Autopsy process the image</li>
            </ol>

            <h4 className="mt-6 font-semibold">Time to Explore and Find Clues!</h4>
            <ol className="list-decimal pl-6">
              <li>
                <strong>File System:</strong>
                <ul className="list-disc pl-6">
                  <li>Browse folders</li>
                  <li>Deleted files marked in red</li>
                  <li>Right-click to Extract Files</li>
                </ul>
              </li>
              <li>
                <strong>Keyword Search:</strong>
                <ul className="list-disc pl-6">
                  <li>Enter search terms</li>
                  <li>See matched files and preview</li>
                </ul>
              </li>
              <li>
                <strong>Web History:</strong>
                <ul className="list-disc pl-6">
                  <li>Track website visits and downloads</li>
                </ul>
              </li>
              <li>
                <strong>Timeline Analysis:</strong>
                <ul className="list-disc pl-6">
                  <li>See when files were created/changed/deleted</li>
                  <li>Look for suspicious activity by time</li>
                </ul>
              </li>
            </ol>

            <h4 className="mt-6 font-semibold">Awesome! You've Already Achieved a Lot!</h4>
            <ul className="list-disc pl-6">
              <li>Got Autopsy installed</li>
              <li>Loaded a real forensic image</li>
              <li>Recovered deleted files</li>
              <li>Searched for keywords</li>
              <li>Viewed web activity</li>
              <li>Explored file timelines</li>
            </ul>
          </article>

          {/* External Links */}
          <div className="mt-6 space-x-6">
            <a
              href="https://sleuthkit.org/autopsy/docs/user-docs/4.22.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Autopsy User Documentation (v4.22.0)
            </a>
            <a
              href="https://www.autopsy.com/training/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Autopsy Training by Sleuth Kit Labs
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.autopsy.com/download/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 cursor-pointer text-lg"
          >
            Try it now
          </a>
        </section>


        {/* Tool 2: FTK Imager */}
        <section className="space-y-6 mt-16">
          <h3 className="text-3xl font-semibold text-black">FTK Imager</h3>
          <article className="text-gray-800 whitespace-pre-wrap text-lg leading-relaxed">
            <h4 className="text-2xl font-bold mb-4">Your First Look at Preserving Digital Evidence with FTK Imager!</h4>
            <p>
              Think of FTK Imager as your trusty tool for making perfect digital copies and getting a quick peek at what's inside computers and other storage devices – all without changing the original evidence. It's like having a super-powered copier and a safe way to look before you touch!
            </p>

            <h4 className="mt-6 font-semibold">What Exactly Is FTK Imager?</h4>
            <ul className="list-disc pl-6">
              <li><strong>Making Perfect Copies:</strong> Creating exact, bit-by-bit copies (called forensic images) of hard drives, USB drives, and more.</li>
              <li><strong>Safe Sneak Peeks:</strong> Letting you look at files and folders on a device or an image without altering the original data in any way.</li>
              <li><strong>Bringing Back What's Lost (Sometimes!):</strong> It can try to recover files that have been deleted from drives.</li>
              <li><strong>Opening Digital Copies:</strong> It allows you to "mount" (like opening) forensic images so other tools can analyze them.</li>
            </ul>

            <h4 className="mt-6 font-semibold">When Might You Use This Helpful Tool?</h4>
            <ol className="list-decimal pl-6">
              <li>Making Digital Backups for Investigations: When you need to create a secure copy of a hard drive or other storage device for forensic analysis.</li>
              <li>Checking if Your Copies are Perfect: It can calculate special "digital fingerprints" (called hashes) to make sure your copy is exactly the same as the original.</li>
              <li>Quickly Seeing What's Inside: When you need to quickly look at the files and folders on a seized device to understand what might be important.</li>
              <li>Getting Files Out of Digital Copies: It allows you to take specific files out of a forensic image.</li>
              <li>Getting Ready for Deeper Investigations: Preparing evidence in a standard format so other powerful forensic tools can analyze it.</li>
            </ol>

            <h4 className="mt-6 font-semibold">What Kind of Digital Evidence Can FTK Imager Work With?</h4>
            <ul className="list-disc pl-6">
              <li>Physical Drives: Your computer's main hard drive (HDD or SSD), USB flash drives, external hard drives.</li>
              <li>Parts of Drives: Specific sections or "partitions" of a hard drive.</li>
              <li>Digital Copy Formats: It works with common forensic image formats like .dd, .E01 (a very popular one!), and .AFF.</li>
              <li>CDs and DVDs: Those shiny discs can also be imaged.</li>
              <li>Virtual Computer Drives: Files that represent the hard drives of virtual machines.</li>
            </ul>

            <h4 className="mt-6 font-semibold">What Kind of Clues Can FTK Imager Help You Uncover?</h4>
            <ul className="list-disc pl-6">
              <li>Files That Were Deleted: It might show you files and folders that have been removed from a drive.</li>
              <li>How the Drive is Organized: Information about the different sections (partitions) of a hard drive.</li>
              <li>Hidden Information About Files: Data like when a file was created or last changed.</li>
              <li>Files That Aren't Easy to See: Files that might be hidden or protected by the operating system.</li>
              <li>Leftover Data: Sometimes, when files are deleted, small bits of them remain in unused space on the drive (called "slack space"), and FTK Imager can sometimes show this.</li>
            </ul>

            <h4 className="mt-6 font-semibold">Let's Get FTK Imager on Your Computer!</h4>
            <ol className="list-decimal pl-6">
              <li>
                <strong>Grab it Here:</strong>{' '}
                <a
                  href="https://accessdata.com/product-download/ftk-imager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Download FTK Imager
                </a>
              </li>
              <li>Start the Setup: Find the file you downloaded and double-click it to begin the installation.</li>
              <li>Say "Yes" to the Rules: You'll see a license agreement – click "I accept the terms in the License Agreement" if you agree.</li>
              <li>Choose Where to Put It: You'll be asked to select an installation directory. The default is usually fine, but you can choose another location if you prefer.</li>
              <li>Pick a Start Menu Folder: This is where the shortcut to open FTK Imager will be placed in your Start Menu. The default name is usually fine.</li>
              <li>Want a Shortcut on Your Desktop? You'll have the option to create a shortcut on your desktop for easy access. This is usually a good idea!</li>
              <li>Finish the Job: Click "Install" and let it do its thing. Once it's done, click "Finish."</li>
            </ol>

            <h4 className="mt-6 font-semibold">Getting Some Practice Data</h4>
            <ol className="list-decimal pl-6">
              <li>Use a USB Drive: You can connect a USB flash drive to your computer. Just be aware that FTK Imager will be able to see everything on it.</li>
              <li>Download Sample Images:
                <ul className="list-disc pl-6">
                  <li>
                    <a
                      href="https://digitalcorpora.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      digitalcorpora.org
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cfreds.nist.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      cfreds.nist.gov
                    </a>
                  </li>
                </ul>
              </li>
            </ol>

            <h4 className="mt-6 font-semibold">Let's Do Some Basic Tasks!</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Making a Digital Copy (Disk Image):</strong>
                <ul className="list-disc pl-6">
                  <li>File → Create Disk Image → Select source</li>
                  <li>Add destination → Choose format (.E01 recommended)</li>
                  <li>Add case info → Choose save location → Start</li>
                </ul>
              </li>
              <li>
                <strong>Previewing Contents:</strong>
                <ul className="list-disc pl-6">
                  <li>File → Add Evidence Item → Select drive/image</li>
                  <li>Explore files and folders in left panel</li>
                </ul>
              </li>
              <li>
                <strong>Exporting Files:</strong>
                <ul className="list-disc pl-6">
                  <li>Right-click → Export File → Choose save folder</li>
                </ul>
              </li>
              <li>
                <strong>Verifying Image Integrity:</strong>
                <ul className="list-disc pl-6">
                  <li>Tools → Verify Drive/Image → Select image → Compare hash</li>
                </ul>
              </li>
            </ol>

            <h4 className="mt-6 font-semibold">Fantastic! You've Already Achieved a Lot!</h4>
            <ul className="list-disc pl-6">
              <li>Got FTK Imager Installed</li>
              <li>Created a Forensic Disk Image</li>
              <li>Previewed and Exported Files Safely</li>
              <li>Verified Image Integrity</li>
              <li>Prepared Evidence for Further Analysis</li>
            </ul>
          </article>

          {/* External Links */}
          <div className="mt-6 space-x-6">
            <a
              href="https://d1kpmuwb7gvu1i.cloudfront.net/Imager/4_7_1/FTKImager_UserGuide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 underline"
            >
              FTK Imager User Guide
            </a>
            <a
              href="https://www.hackingarticles.in/comprehensive-guide-on-ftk-imager/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 underline"
            >
              Comprehensive Guide on FTK Imager
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://accessdata.com/products-services/ftk-imager"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 cursor-pointer text-lg"
          >
            Try it now
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-black">
        &copy; {new Date().getFullYear()} Forensic Lab. All rights reserved.
      </footer>
    </div>
  );
}
