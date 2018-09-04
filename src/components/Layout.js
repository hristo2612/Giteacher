import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import AppBar from './ButtonAppBar';
import SidebarMenu from '../components/Menu/';

import { pullRight, h1 } from './Layout.css';



const Layout = ({ children, openMenu, closeMenu, menuOpen, appName }) => {
  return (
    <div>
      <SidebarMenu closeMenu={closeMenu} left={menuOpen} />
      <AppBar openMenu={openMenu} />
      <Container textAlign={"right"}>
        <Divider />
        {children}
        <Divider />
        <p className={pullRight}>
          Made with <Icon name="heart" color="red" />
        </p>
      </Container>
    </div>
  );
};

export default Layout;