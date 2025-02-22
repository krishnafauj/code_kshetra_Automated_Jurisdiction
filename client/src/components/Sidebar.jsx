import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, FileText, Search, Clock, Scale, Building2, Users, Calendar,
  Settings, HelpCircle, LogOut, ChevronLeft, ChevronRight
} from 'lucide-react';

const Sidebar = ({ isDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Register Case', icon: FileText, path: '/user-complaint' },
    { name: 'Search Cases', icon: Search, path: '/search' },
    { name: 'Case Status', icon: Clock, path: '/status' },
    { name: 'Court Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Legal Resources', icon: Scale, path: '/resources' },
  ];

  const stakeholderItems = [
    { name: 'Police Portal', icon: Building2, path: '/policelogin' },
    { name: 'Advocate Portal', icon: Building2, path: '/advocatelogin' },
    { name: 'Magisterate Portal', icon: Users, path: '/magistratelogin' },
  ];

  const NavItem = ({ item }) => {
    const isActive = location.pathname.startsWith(item.path);
    return (
      <Link
        to={item.path}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          isActive 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
        }`}
      >
        <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white dark:text-white'}`} />
        {!isCollapsed && <span className='text-white'>{item.name}</span>}
      </Link>
    );
  };

  const handleLogout = () => {
    console.log("Logging out..."); 
  };

  return (
    <aside
      className={`${
        isDarkMode ? 'bg-gray-800' : 'bg-[#1E2939]'
      } fixed left-0 top-0 h-screen shadow-lg transition-all ${
        isCollapsed ? 'w-16' : 'w-64'
      } z-80 `}
    >
      {/* Logo */}
      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-6'} h-[70px] border-b dark:border-gray-700 `}>
        {/* {!isCollapsed && <span className="text-xl font-bold text-blue-600">JusticeHub</span>} */}
      </div>

      {/* Collapse Button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" /> 
                       : <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
        </button>
      </div>

      {/* Navigation */}
      <div className="p-3 space-y-6">
        {/* Main Navigation */}
        <div className="space-y-1">
          {!isCollapsed && (
            <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Main Navigation
            </h3>
          )}
          {navigationItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>

        {/* Stakeholder Portals */}
        <div className=" space-y-1">
          {!isCollapsed && (
            <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Stakeholder Portals
            </h3>
          )}
          {stakeholderItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>

        {/* Bottom Items */}
        <div className="absolute bottom-0 left-0 right-0 p-3 space-y-1 border-t dark:border-gray-700">
          <Link to="/settings" className="flex items-center gap-3 px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">
            <Settings className="w-5 h-5 text-white dark:text-white" />
            {!isCollapsed && <span className='text-white'>Settings</span>}
          </Link>
          <Link to="/help" className="flex items-center gap-3 px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">
            <HelpCircle className="w-5 h-5 text-white dark:text-white" />
            {!isCollapsed && <span className='text-white'>Help & Support</span>}
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg w-full">
            <LogOut className="w-5 h-5 text-white dark:text-white" />
            {!isCollapsed && <span className='text-white'>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
