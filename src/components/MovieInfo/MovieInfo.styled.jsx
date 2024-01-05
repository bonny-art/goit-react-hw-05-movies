import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  max-width: 727px;
`;
export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: KyivTypeSerif-Medium;
  font-size: ${props => props.theme.fontSizes.xxl};
  margin-bottom: 12px;
`;

export const ScoreStyled = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const SubtitleStyled = styled.h2`
  color: ${props => props.theme.colors.white};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.large};
  margin-top: 24px;
`;

export const TextStyled = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-top: 12px;
`;

export const HeaderStyled = styled.h3`
  color: ${props => props.theme.colors.white};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: 24px;
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 52px;
  margin-bottom: 24px;
`;

export const LinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.lightText};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.large};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  &.active {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;
