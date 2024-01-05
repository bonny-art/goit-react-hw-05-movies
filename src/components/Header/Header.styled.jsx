import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
`;

export const HeaderTop = styled.div`
  background-color: ${props => props.theme.colors.darkText};
  padding: ${props => props.theme.spacing(4.5)} 0;
`;

export const HeaderBottom = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 100px;
`;

export const Container = styled.div`
  position: relative;
  height: ${props => props.theme.spacing(20)};
  width: ${props => props.theme.spacing(282.5)};
  padding: 0 ${props => props.theme.spacing(3.75)};
  /* outline: dashed orange 3px; */
  margin: 0 auto;
  display: flex;
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing(24.5)};
  left: 0;
  transform: translateY(-50%);
  width: 200px;
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 48px;
  align-items: center;
  margin: 0 auto;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.lightText};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.medium};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
  }
  &.active {
    color: ${props => props.theme.colors.white};
  }
`;
