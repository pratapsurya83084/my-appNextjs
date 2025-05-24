import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
  <footer className="bg-black text-white py-10 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left px-6">
    {/* col1 */}
    <div>
      <h4 className="text-lg font-semibold mb-2">About Us</h4>
      <p className="text-sm text-gray-400">
        Music School is a premier institution dedicated to teaching music and the science of music.
      </p>
    </div>

    {/* col2 */}
    <div>
      <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><Link href="/" className="hover:text-indigo-400">Home</Link></li>
        <li><Link href="/" className="hover:text-indigo-400">About</Link></li>
        <li><Link href="/courses" className="hover:text-indigo-400">Courses</Link></li>
        <li><Link href="/contact" className="hover:text-indigo-400">Contact</Link></li>
      </ul>
    </div>

    {/* col3 */}
    <div>
      <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
      <ul className="flex space-x-4 text-sm text-gray-300">
        <li><Link href="/" className="hover:text-indigo-400">Facebook</Link></li>
        <li><Link href="/" className="hover:text-indigo-400">Twitter</Link></li>
        <li><Link href="/" className="hover:text-indigo-400">Instagram</Link></li>
      </ul>
    </div>

    {/* col4 */}
    <div>
      <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
      <ul className="space-y-1 text-sm text-gray-300">
        <li>Pune, Maharashtra</li>
        <li>Pin Code: 414415</li>
        <li>Phone: +91 8308459145</li>
      </ul>
    </div>
  </div>

  {/* Bottom */}
  <div className="text-center text-gray-500 text-xs mt-10 md:mt-29 px-4">
    &copy; {new Date().getFullYear()} Music Maestro. All rights reserved.
    <br />
    Developed by Pratap Suryawanshi
  </div>
</footer>

  );
};
