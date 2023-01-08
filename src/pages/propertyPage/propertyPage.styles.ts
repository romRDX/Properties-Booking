import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: relative;
    max-width: 1100px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;

    h1 {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-bottom: 15px;
        position: relative;

        background: gray;

        font-size: 24px;
        font-weight: bold;
    }

    h1::after {
        content: "";
        width: 95%;
        border-bottom: 2px solid black;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    img {
        width: 45%;
    }

    > div {
        display: flex;
        padding: 15px;
        background: gray;
        border-radius: 10px;
    }

    @media (max-width: 1125px) {

        width: 90%;

        img {
            height: fit-content;
            margin: auto 0;
        }

        
    }

    @media (max-width: 997px) {

        img {
            margin: 0 auto;
            width: 55%;
            min-width: 300px;
        }

        > div {
            flex-direction: column;
        }
    }
`;

export const PropertyData = styled.div`
    padding: 10px 0 10px 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-wrap: wrap;

    p {
        width: 100%;
        text-align: left;
        margin-top: 10px;
    }

    span {
        font-weight: bold;
    }
`;

export const PickerContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    border-bottom-right-radius: 10px;

    h3 {
        margin: 0 0 10px 0;
        font-size: 20px;
        font-weight: bold;
    }

    @media (max-width: 997px) {
        width: 100%;
        margin-top: 15px;
    }
`;