import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
      <main >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;