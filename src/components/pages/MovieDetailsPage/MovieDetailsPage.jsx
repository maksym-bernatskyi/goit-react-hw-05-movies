import { useState, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import * as FilmsAPI from "../../../services/API";
import FilmDetailsCard from "./FilmDetailsCard";
import { ButtonGoBackContainer, ButtonGoBack } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState();
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState(location?.state?.from ?? "/");

    useEffect(() => {
        FilmsAPI.fetchFilmInfo(id).then((data) => {
            Loading.circle({
                svgColor: "#ff6b01",
                cssAnimationDuration: 800,
            });
            setFilm(data);
        }).finally(() => {
            Loading.remove();
        });
    }, [id]);

    return (
        <>
            <ButtonGoBackContainer>
                <ButtonGoBack to={prevLocation}>Go back</ButtonGoBack>
            </ButtonGoBackContainer>
            {film && <FilmDetailsCard data={film} />}
            <Outlet />
        </>
    );
};

export default MovieDetailsPage;