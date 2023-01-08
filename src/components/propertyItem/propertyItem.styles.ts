import styled, { keyframes } from "styled-components";

const property_entrance = keyframes`
    0% {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
  
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
}
`;

export const Container = styled.li`
    width: 400px;
    background: white;
    margin: auto auto 40px auto;
    position: relative;
    overflow: hidden;
    transition: .5s;
    animation: ${property_entrance} .5s;
    color: #FFF;
    cursor: pointer;

    img {
        width: inherit;
        height: inherit;
    }

    div {
        background: rgba(0, 0, 0, 0.75);
        position: absolute;
        height: 191px;
        width: 100%;
        box-sizing: border-box;
        bottom: -143px;
        padding: 0 22px 0 14px;
        transition: .5s;
        text-align: left;

        h3 {
            font-size: 16px;
            font-weight: bold;
            margin: 0 0 12px 0;
            height: 48px;
            display: flex;
            align-items: center;
        }

        p {
            margin-top: 7px;
            font-size: 12px;
        }

        span {
            font-weight: bold;
            font-size: 14px;
        }
    }

    &:hover div {
        bottom: 0;
    }

    &:hover div h3 {
        margin: 0 0 7px 0;
    }
    
    @media (max-width: 515px) {
        width: 300px;
    }
`;

