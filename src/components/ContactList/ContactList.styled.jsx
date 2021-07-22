import styled from '@emotion/styled/macro';

export const List = styled.ul`
  list-style: square;
  & li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    & span:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
