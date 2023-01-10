import { useState, useEffect } from "react";
import FilmList from "../../FilmList";
import * as FilmsAPI from "../../../services/API";
import { Loading } from "notiflix/build/notiflix-aio";

const HomePage = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        FilmsAPI.fetchPopularFilms()
        .then((data) => {
            Loading.circle({
                svgColor: "#ff6b01",
            });
            setFilms(data);
        })
        .finally(() => {
            Loading.remove();
        });
    }, []);
    return <FilmList data={films} />;
};

export default HomePage;