import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding-top: ${props => props.theme.spacing(15)};
  border-top: ${props => props.theme.colors.white}
    ${props => props.theme.spacing(0.5)} solid;
`;

export const Itemtyled = styled.li`
  background-color: ${props => props.theme.colors.main};
  padding: ${props => props.theme.spacing(7)}
    ${props => props.theme.spacing(15)} ${props => props.theme.spacing(10)};
  border-radius: ${props => props.theme.spacing(1)};
`;

export const TitleStyled = styled.h2`
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing(3)};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.xl};
`;

export const RatingStyled = styled.p`
  color: ${props => props.theme.colors.lightText};
  margin-bottom: ${props => props.theme.spacing(5)};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const TextStyled = styled.p`
  color: ${props => props.theme.colors.darkText};
  font-family: KyivTypeSerif-Regular;
  font-size: ${props => props.theme.fontSizes.medium};
`;
