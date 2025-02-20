import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen  bg-gray-50">
        <Header />
      <main >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;