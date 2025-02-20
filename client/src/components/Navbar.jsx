import React from 'react'
import {
    Scale,
    FileText,
    Search,
    Clock,
    BarChart3,
    Building2,
    Users,
    Calendar,
    Moon,
    Sun,
    MessageSquare,
    Globe
  } from 'lucide-react';
  
function Navbar() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    
  return (
    <div>
         <nav className="bg-white shadow-md dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">JusticeHub</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Globe className="w-5 h-5 text-gray-600" />
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
