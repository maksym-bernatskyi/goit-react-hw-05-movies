import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import FilmCard from "../FilmCard";
import { List } from "./FilmList.styled";
import { ItemLink } from "../FilmCard/FilmCard.styled";

const FilmList = ({ data }) => {
    const location = useLocation();

    return (
        <List>
            {data.map((element) => (
                <ItemLink to={`/movies/${element.id}`} state={{ from: location }} key={element.id}>
                    <FilmCard itemData={element} />
                </ItemLink>
            ))}
        </List>
    );
};

export default FilmList;

FilmList.propTypes = {
    data: PropTypes.array.isRequired,
};