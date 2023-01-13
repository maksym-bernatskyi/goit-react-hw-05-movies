import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerFilmDetails = styled.div`
    margin-top: 10px;
    padding: 10px;
    border-radius: 30px;
    border: 0.5px solid #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;

    @media screen and (max-width: 480px) {
        max-width: 310px;
    }
`;

export const FilmContainer = styled.div`
    display: flex;
    margin-top: 20px;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ImagePoster = styled.img`
    border: 3px solid #ffffff;
    width: 320px;
    height: 460px;

    @media screen and (max-width: 480px) {
        width: 250px;
        height: 350px;
    }
`;

export const ContainerMeta = styled.div`
    margin-left: 20px;
`;

export const Title = styled.h1`
    font-size: 16px;
`;

export const PreTitle = styled.p`
    margin-top: 10px;
    margin-bottom: 20px;
    color: #818181;
`;

export const AddInfo = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const Cast = styled(Link)`
    padding: 10px 50px;
    background-color: #ffffff;
    border-radius: 20px;
    margin-right: 30px;
    text-decoration: none;
    color: #000000;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color: #ff6b01;
    }
    @media screen and (max-width: 480px) {
        padding: 10px 30px;
        margin-right: 10px;
    }
`;

export const Reviews = styled(Link)`
    padding: 10px 50px;
    background-color: #fff;
    border-radius: 20px;
    text-decoration: none;
    color: black;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color: #ff6b01;
    }
    @media screen and (max-width: 480px) {
        padding: 10px 30px;
    }
`;