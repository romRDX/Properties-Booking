import styled, { css } from 'styled-components';

interface ContainerProps {
    styleType: "standard" | "wide";
}

const responsiveStyle = {
    standard: css`
        @media (max-width: 1125px) {

            > div {
                justify-content: center;
                flex-direction: column;

                button {
                    margin: 10px auto 0;
                }
            }
        }

        @media (max-width: 997px) {
            > div {
                
                flex-direction: row;

                button {
                    margin: 0 0 0 10px;
                }
            }
        }

        @media (max-width: 650px) {
            > div {
                justify-content: center;
                flex-direction: column;

                button {
                    margin: 10px auto 0;
                }
            }
        }
    `,
    wide: css`
        @media (max-width: 675px) {
            > div {
                // flex-direction: column;
                flex-wrap: wrap;
                justify-content: start;

                .react-datepicker-wrapper {
                    margin-right: 10px;
                }

                button {
                    margin: 10px 0 0;
                }
            }
        }
    `
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 10px;
    border-bottom-left-radius: 10px;

    h3 {
        margin-bottom: 20px;
    }

    > p {
        text-align: left;
        margin-top: 10px;
    }

    > div {
        display:flex;
        justify-content: space-between;

        > button {
            background: #256EA7;
            border-radius: 10px;
            width: fit-content;
            padding: 5px 12px;
            color: #FFF;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .react-datepicker-wrapper {
        width: auto;
    }

    .react-datepicker__input-container {
        background: #FFF;
        width: fit-content;
        border-radius: 8px;
        padding: 5px;
        box-shadow: inset 0px 0px 4px 1px;
    }

    ${ props => responsiveStyle[props.styleType]}
`;