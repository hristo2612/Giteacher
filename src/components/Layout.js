import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import AppBar from './ButtonAppBar';
import SidebarMenu from '../components/Menu/';

import { pullRight, h1 } from './Layout.css';

import { Header__light, Header__dark } from '../styling/App.css';


const Layout = ({ children, openMenu, closeMenu }) => {
  return (
    <div>
      <AppBar openMenu={openMenu} />
      <SidebarMenu closeMenu={closeMenu} />
      <Container textAlign={"right"} className={Header__light}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;