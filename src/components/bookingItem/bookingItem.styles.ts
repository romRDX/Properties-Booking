import styled, { keyframes } from "styled-components";

export const Container = styled.li`
    background: #FFF;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    text-align: left;
    position: relative;
    padding-left: 20px;
    position: relative;
    align-items: center;

    &:before {
        content: "";
        width: 15px;
        height: 100%;
        background: blue;
        position: absolute;
        top: 0;
        left: 0;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    span {
        font-weight: bold;
        margin-right: 5px;
    }

    p {
        width: fit-content;
    }

    button {
        background: blue;
        color: #FFF;
        padding: 5px 10px;
        width: fit-content;
        height: fit-content;
        border-radius: 10px;
        cursor: pointer;
    }

    @media (max-width: 830px) {
        flex-direction: column;
        align-items: start;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;

        p {
            margin-right: 30px;
        }
    }

    @media (max-width: 670px) {
        div {
            flex-direction: column;
        }
    }
`;

export const ButtonsContainer = styled.div`
    height: 100%;
    margin-left: auto;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    @media (max-width: 830px) {
        margin: 15px 0 0 0;
        width: 100%;
        display: flex;

        > button {
            margin-right: 10px;
        }
    }

    @media (max-width: 450px) {
        flex-direction: column;

        div {
            flex-direction: column;
            margin: 0;

            button {
                margin-bottom: 10px;
            }
        }
    }
`;