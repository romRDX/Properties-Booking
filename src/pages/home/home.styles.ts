import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookingBoard = styled.div`
  background: lightgray;
  width: 100%;
  max-width: 880px;
  margin: 20px auto;
  min-height: 300px;
  border-radius: 10px;

  > div {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
  }

  @media (max-width: 930px) {
    width: 90%;
  }
`;