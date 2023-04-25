import { useState } from 'react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="block w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full py-2 mt-1 bg-white rounded-md shadow-lg">
          <a
            href="Trail5"
            // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 1
          </a>
          <a
            href="Trail"
            // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 2
          </a>
          <a
            href="profile"
            // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
}
