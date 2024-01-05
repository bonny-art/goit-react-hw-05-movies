import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const InputStyled = styled.input`
  background-color: ${props => props.theme.colors.white};
  outline: none;
  border: 2px solid ${props => props.theme.colors.lightText};
  padding: ${props => props.theme.spacing(2.25)}
    ${props => props.theme.spacing(4)} ${props => props.theme.spacing(2.5)};
  width: 391px;
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.xxs};
  color: ${props => props.theme.colors.background};
  &::placeholder {
    color: ${props => props.theme.colors.lightText};
  }
  &:focus {
    border: 2px solid ${props => props.theme.colors.darkText};
  }
`;

export const BtnStyled = styled.button`
  background-color: ${props => props.theme.colors.darkText};
  padding: ${props => props.theme.spacing(2.5)}
    ${props => props.theme.spacing(9.75)};
  border-radius: 0 ${props => props.theme.spacing(1)}
    ${props => props.theme.spacing(1)} 0;

  &:focus,
  &:hover {
    background-color: ${props => props.theme.colors.main};
  }
`;
