import React, { useState } from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

import AdvocateSidebar from '../components/advocateSidebar';
import MagisterateSidebar from '../components/MagisterateSidebar';

const Layout = ({ children, userRole }) => {
 
  return (
    <div className={` flex min-h-screen`}>
      

      <div className="flex flex-col flex-1 transition-all duration-300">

        <main className="flex-1 transition-all duration-300">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
