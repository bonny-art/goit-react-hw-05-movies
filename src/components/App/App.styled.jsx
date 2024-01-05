import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  padding-top: ${props => props.theme.spacing(54)};
  padding-bottom: ${props => props.theme.spacing(10)};
`;

export const ContainerStyled = styled.div`
  width: ${props => props.theme.spacing(282.5)};
  padding: 0 ${props => props.theme.spacing(3.75)};
  /* outline: dashed orange 3px; */
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ErrorStyled = styled.div`
  font-family: KyivTypeSerif-Regular;
  color: ${props => props.theme.colors.lightText};
  font-size: ${props => props.theme.fontSizes.large};
  display: flex;
  justify-content: center;
  padding-top: ${props => props.theme.spacing(10)};
  text-decoration: none;
  padding-bottom: ${props => props.theme.spacing(10)};
`;
