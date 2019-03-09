import styled from 'src/utils/styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(250px + 5vw);
  height: 100%;
  padding: calc(30px + 2vh) 0 calc(10px + 2vh);
  background-color: ${({ theme }) => theme.color.darkOrange};

  &:first-child {
    margin-bottom: 20px;
  }

  & > nav {
    flex: 1;
  }
`;