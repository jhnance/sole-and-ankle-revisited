/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <OverlayContent>
        <CloseButtonWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" size={24} />
          </CloseButton>
        </CloseButtonWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </OverlayContent>
    </Overlay>
  );
};

const CloseButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-start;
  color: var(--color-gray-900);
  padding: 16px;

  &:focus,
  &:focus-visible {
    color: var(--color-secondary);
    outline: 2px solid var(--color-secondary);
    outline-offset: 2px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  padding-left: 32px;
  font-size: 1.125rem;
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 14px;
  padding-left: 32px;
  padding-bottom: 32px;
  font-size: calc(calc(14 / 18) * 1rem);
`;

const Link = styled.a`
  display: inline-block;
  width: max-content;
  text-decoration: none;
  flex-basis: 0;

  &:focus,
  &:focus-visible {
    color: var(--color-secondary);
    outline: 2px solid var(--color-secondary);
    outline-offset: 2px;
  }
`;

const FooterLink = styled(Link)`
  color: var(--color-gray-700);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);

  &:hover {
    color: var(--color-secondary);
  }
`;

const Overlay = styled(DialogOverlay)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const OverlayContent = styled(DialogContent)`
  background-color: var(--color-white);
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MobileMenu;
