import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from './ButtonAppBar';
import SidebarMenu from '../components/Menu/';

const Layout = ({ children, openMenu, closeMenu }) => {
  return (
    <div>
      <AppBar openMenu={openMenu} />
      <SidebarMenu closeMenu={closeMenu} />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;