import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    padding: 4.5px;
    padding-top: 4px;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #20212a;
    &:hover {
        background-color: #4754c8;
    }
`;

export const Input = styled.input`
    width: 400px;
    padding: 10px;
    border: none;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #20212a;
    caret-color: #ff6b01;
    color: #ffffff;

    @media screen and (max-width: 480px) {
        max-width: 300px;
    }
`;

export const InfoSearch = styled(BsArrowRightCircle)`
    color: #ffffff;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        color: #ff6b01;
    }
`;