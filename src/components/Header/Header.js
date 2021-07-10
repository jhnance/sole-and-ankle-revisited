import React from 'react';
import styled from 'styled-components/macro';

import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
      <MobileHeader>
        <Logo />
        <Nav>
          <Icon id="shopping-bag" size={24} />
          <Icon id="search" size={24} />
          <Icon
            id="menu"
            size={24}
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
            style={{
              cursor: 'pointer',
            }}
          />
        </Nav>
      </MobileHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}rem) {
    display: none;
  }
`;

const Nav = styled.nav`
  --min-gap: calc(calc(24 / 16) * 1rem);
  --max-gap: calc(calc(80 / 16) * 1rem);
  display: flex;
  gap: clamp(var(--min-gap), 9.6vw - 4.25rem, var(--max-gap));
  margin: 0px 48px;
  overflow-x: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}rem) {
    gap: clamp(1.1rem, 8vw - 1.75rem, 2.125rem);
    margin: 0;
  }
`;

const MobileHeader = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}rem) {
    display: flex;
    box-sizing: content-box;
    height: 72px;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    border-bottom: 1px solid var(--color-gray-300);
    border-top: 4px solid var(--color-gray-900);
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
