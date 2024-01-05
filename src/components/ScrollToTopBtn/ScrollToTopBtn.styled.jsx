import styled from '@emotion/styled';

export const ScrollToTopBtnStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: ${props => props.theme.spacing(5)};
  right: ${props => props.theme.spacing(7.5)};
  width: ${props => props.theme.spacing(12.5)};
  height: ${props => props.theme.spacing(12.5)};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.darkText};
  color: white;
  font-size: ${props => props.theme.fontSizes.medium};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.main};
  }
`;
