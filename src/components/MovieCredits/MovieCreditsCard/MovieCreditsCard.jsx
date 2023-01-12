import PropTypes from "prop-types";
import { ContainerTitle, PreTitleActors, TitleActors, Image, List, Item, Wrapper } from "./MovieCreditsCard.styled";

const MovieCreditsCard = ({ data }) => {
    return (
        <List>
            {data.map((element) => (
                <Item key={element.id}>
                    <Wrapper>
                    <Image src={element.profile_path ? `https://image.tmdb.org/t/p/original/${element.profile_path}` : `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`} alt="Photo Actors" />
                    <ContainerTitle>
                        <TitleActors>{element.name}</TitleActors>
                        <PreTitleActors>Character: {element.character}</PreTitleActors>
                    </ContainerTitle>
                    </Wrapper>
                </Item>
            ))}
        </List>
    );
};

export default MovieCreditsCard;

MovieCreditsCard.propTypes = {
    data: PropTypes.array.isRequired,
};