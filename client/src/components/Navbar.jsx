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
    <div className='w-screen  z-90'>
         <nav className="bg-white shadow-md dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">JusticeHub</span>
            </div>
            <div className="flex items-center gap-4">
              <button>
                Login
              </button>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
