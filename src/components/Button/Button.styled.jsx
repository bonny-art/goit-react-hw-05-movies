import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  background-color: ${props => props.theme.colors.darkText};
  border-radius: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2.5)};
  display: block;
  width: max-content;
  color: ${props => props.theme.colors.white};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.xs};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.main};
  }
`;
