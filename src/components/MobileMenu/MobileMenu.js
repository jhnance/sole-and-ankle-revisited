/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

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
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24} />
        </CloseButton>
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

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: 26px;
  margin-right: 16px;
  color: ${COLORS.gray[900]};

  &:focus,
  &:focus-visible {
    color: ${COLORS.secondary};
    outline: 2px solid ${COLORS.secondary};
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
  flex-direction: column;
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
    color: ${COLORS.secondary};
    outline: 2px solid ${COLORS.secondary};
    outline-offset: 2px;
  }
`;

const FooterLink = styled(Link)`
  color: ${COLORS.gray[700]};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};

  &:hover {
    color: ${COLORS.secondary};
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
`;

const OverlayContent = styled(DialogContent)`
  background-color: ${COLORS.white};
  margin-left: auto;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MobileMenu;
