import styled from 'styled-components';

export const Container = styled.div`

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }

  > p {
    font-size: 20px;
    margin-top: 15px;
  }

  ul {
    width: 100%;
    position: relative;
    max-width: 1100px;
    margin: 20px auto;
    background: gray;
    border-radius: 10px;
    padding: 15px 15px 5px;
  }

  .custom-modal-content {
    width: 600px;
    background: red;
  }

  .ModalOverlay {
    position: fixed;
    inset: 0px;
    background-color: rgba(20, 20, 20, 0.75);
  }

  @media (max-width: 1130px) {
    ul {
      width: 90%;
    }
  }
  
`;

export const ModalContent = styled.div`
  position: relative;

  p {
    margin-top: 7px;
    font-size: 16px;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    margin-right: 5px;
  }

  button {
    position: absolute;
    right: -11px;
    top: -18px;
    background: red;
    color: #FFF;
    font-weight: bold;
    padding: 3px 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 4px;
    cursor: pointer;
  }
`;