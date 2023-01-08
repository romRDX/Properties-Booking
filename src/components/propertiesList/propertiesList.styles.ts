import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 930px) {
    > ul {
      grid-template-columns: 1fr;
    }
  }
`;