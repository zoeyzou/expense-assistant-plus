import styled from 'src/utils/styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(250px + 5vw);
  min-width: 270px;
  height: 100%;
  padding: calc(30px + 2vh) 0 calc(10px + 2vh);
  background-color: ${({ theme }) => theme.color.darkOrange};

  & > nav {
    flex: 1;
  }
`;
