import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    border-radius: 5.57802px;
    position: relative;
    width: 90%;
    height: 38px;
    box-sizing: border-box;
    max-width: 1168px;
    border: 0;
    padding: 11px 11px 11px 16px;
    margin: auto;
    display: flex;

    input {
        outline: 0;
        border: 0;
        margin-left: 9px;
        width: 100%;
    }

    @media (max-width: 1222px) {
        width: 80%;
    }
`;