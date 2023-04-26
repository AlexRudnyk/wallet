import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const NavButton = styled.button`
  border: none;
  background-color: inherit;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-right: 38px;
    }
  }

  @media screen and (min-width: 768px) {
    &:last-child {
      display: none;
    }
    &:nth-child(1) {
      margin-bottom: 21px;
    }
  }
`;

export const Link = styled(NavLink)`
  & > p {
    font-family: ${p => p.theme.fonts.textSecond};
    font-style: normal;
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 27px;
    color: ${p => p.theme.colors.black};
  }

  & > svg {
    width: 38px;
    height: 38px;
    fill: ${p => p.theme.colors.notActiveLink};
  }
  &.active {
    font-family: ${p => p.theme.fonts.logo};
    & > svg {
      fill: ${p => p.theme.colors.activeLink};
    }
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  @media screen and (min-width: 768px) {
    & > svg {
      width: 18px;
      height: 18px;
    }
    display: flex;
    align-items: center;
  }
`;

export const LinkName = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-left: 23px;
  }
`;
