import PropTypes from "prop-types";
import { Table, Tr, Td, TitleCategory } from "./TableInfoFilm.styled";

const TableInfoFilm = ({ data }) => {
    const { vote_average, release_date, production_countries, runtime, overview, genres } = data;

    return (
        <Table>
            <tbody>
                <Tr>
                    <Td>
                        <TitleCategory>Ratings:</TitleCategory>
                    </Td>
                    <Td>
                        <span>{vote_average}</span>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <TitleCategory>Release date:</TitleCategory>
                    </Td>
                    <Td>
                        <span>{release_date}</span>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <TitleCategory>Country:</TitleCategory>
                    </Td>
                    <Td>
                        <span>{production_countries.map((element) => element.name)}</span>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <TitleCategory>Gemres:</TitleCategory>
                    </Td>
                    <Td>
                        <span>{genres.map((element) => element.name).join(" ")}</span>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <TitleCategory>Time:</TitleCategory>
                    </Td>
                    <Td>
                        <span>{runtime} min.</span>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <TitleCategory>Overview:</TitleCategory>
                    </Td>
                    <Td>
                        <span>{overview} min.</span>
                    </Td>
                </Tr>
            </tbody>
        </Table>
    );
};

export default TableInfoFilm;

TableInfoFilm.propTypes = {
    data: PropTypes.object.isRequired,
};