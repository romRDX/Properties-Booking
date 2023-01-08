import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        cursor: pointer;
        transition: .5s;
    }

    svg:hover {
        transform: scale(1.5);
    }

    svg:last-child:hover {
        transform: scale(1.5);
    }

    ul {
        list-style-type: none;
        display: flex;
        width: fit-content;
        padding: 0;
        margin: 0 12.39px;
    }

    ul li {
        user-select: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: gray;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7px;
        opacity: 0.6;
        transition: .5s;
    }

    ul li:hover {
        box-shadow: 0 0 10px 3px black;
    }

    ul li.isActive {
        opacity: 1;
    }

    ul li:last-child {
        margin-right: 0;
    }
`;