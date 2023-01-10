import styled from "styled-components";
import { genresInfo } from "./genresInfo";

export const GenerateGenres = (genresId) => {
    const id = Object.values(genresId);
    const listGenres = [];

    genresInfo.forEach((element) => {
        if (id[0].includes(element.id)) {
            listGenres.push(element.name);
        }
    });
    return <Genres>{listGenres.slice(0, 2).join(", ") + ", Other"}</Genres>;
};

const Genres = styled.span`
    color: #ff6b01;
`;