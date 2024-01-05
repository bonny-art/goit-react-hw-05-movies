import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 43.5px;
  row-gap: ${props => props.theme.spacing(10)};
`;

export const ItemStyled = styled.li`
  width: ${props => props.theme.spacing(46.25)};
  background-color: ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.spacing(1)};
`;

export const LinkStyled = styled(Link)`
  height: 100%;
  display: block;
  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 black;
  }
  border-radius: ${props => props.theme.spacing(1)};
`;

export const ImgWrapStyled = styled.div`
  border-radius: ${props => props.theme.spacing(1)}
    ${props => props.theme.spacing(1)} 0 0;
  overflow: hidden;
`;

export const ImgStyled = styled.img``;

export const TextWrapStyled = styled.div`
  padding: ${props => props.theme.spacing(3.75)} 0;
  padding-right: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleStyled = styled.h2`
  color: ${props => props.theme.colors.white};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: capitalize;
`;

export const TextStyled = styled.p`
  color: ${props => props.theme.colors.lightText};
  margin-top: 8px;
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.small};
`;
