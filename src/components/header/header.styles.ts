import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: gray;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
  display: flex;
  align-items: center;

  h1 {
    border-right: 2px solid black;
    padding-right: 20px;
    margin-left: 20px;
  }

  ul {
    margin-left: 50px;
    display: flex;

    li {
      margin: auto 15px;
      cursor: pointer;
    }
  }

  @media (max-width: 520px) {
    font-size: 14px;
  }
`;