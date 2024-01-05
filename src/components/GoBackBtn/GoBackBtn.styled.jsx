import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  background-color: ${props => props.theme.colors.darkText};
  border-radius: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2.5)};
  display: block;
  width: max-content;
  color: ${props => props.theme.colors.white};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.xs};
  margin: 0 0 ${props => props.theme.spacing(10)};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.main};
  }
`;
