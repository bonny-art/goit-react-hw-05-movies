import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 43.5px;
  padding-top: ${props => props.theme.spacing(15)};
  border-top: ${props => props.theme.colors.white}
    ${props => props.theme.spacing(0.5)} solid;
`;

export const ItemStyled = styled.li`
  width: 185px;
  background-color: ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.spacing(1)};
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 10px 0 black;
  }
`;

export const TextWrapStyled = styled.div`
  padding: ${props => props.theme.spacing(3)};
`;

export const TitleStyled = styled.h2`
  color: ${props => props.theme.colors.white};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: capitalize;
`;

export const TextStyled = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: ${props => props.theme.spacing(1)};
`;
