import { useState } from 'react';
import { FaTachometerAlt, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="sm:hidden text-white p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-850 text-white w-full sm:w-64 p-4 sm:block transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaTachometerAlt />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaCog />
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaSignOutAlt />
              Logout
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
