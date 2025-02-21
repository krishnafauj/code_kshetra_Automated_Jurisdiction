import React, { useState } from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import PoliceSidebar from '../components/policeSidebar';
import AdvocateSidebar from '../components/advocateSidebar';
import MagisterateSidebar from '../components/MagisterateSidebar';

const Layout = ({ children, userRole }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to return the appropriate sidebar based on userRole
  const renderSidebar = () => {
    switch (userRole) {
      case 'police':
        return <PoliceSidebar isDarkMode={isDarkMode} />;
      case 'advocate':
        return <AdvocateSidebar isDarkMode={isDarkMode} />;
      case 'magistrate':
        return <MagisterateSidebar isDarkMode={isDarkMode} />;
      default:
        return <Sidebar isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} flex min-h-screen`}>
      {/* Render appropriate sidebar */}
      {renderSidebar()}

      {/* Main Content */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        <Header />
        <main className="flex-1 transition-all duration-300">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
