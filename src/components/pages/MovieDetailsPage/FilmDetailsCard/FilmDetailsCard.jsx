import PropTypes from "prop-types";
import { ContainerFilmDetails, FilmContainer, Reviews, Cast, AddInfo, Title, PreTitle, ContainerMeta, ImagePoster } from "./FilmDetailsCard.styled";
import TableInfoFilm from "../TableInfoFilm";

const FilmDetailsCard = ({ data }) => {
    const { title, tagline, poster_path } = data;

    return (
        <ContainerFilmDetails>
            <FilmContainer>
                <ImagePoster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
                <ContainerMeta>
                    <Title>{title}</Title>
                    <PreTitle>{tagline}</PreTitle>
                    <TableInfoFilm data={data} />
                </ContainerMeta>
            </FilmContainer>
            <AddInfo>
                <Cast to={"cast"}>Cast</Cast>
                <Reviews to={"reviews"}>Reviews</Reviews>
            </AddInfo>
        </ContainerFilmDetails>
    );
};

export default FilmDetailsCard;

FilmDetailsCard.propTypes = {
    data: PropTypes.object.isRequired,
};