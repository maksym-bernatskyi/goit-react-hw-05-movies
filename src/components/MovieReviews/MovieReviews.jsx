import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-aio";
import * as FetchAPI from "../../services/API";
import Reviews from "./Reviews";
import { List } from "./Reviews/Reviews.styled";

const MovieReviews = () => {
    const params = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        FetchAPI.fetchMovieReviews(params.id).then((data) => {
            if (data.length === 0) {
                return Notify.info("Sorry... reviews list is empty!");
            }
            setReviews(data);
        });
    }, [params.filmId]);

    return (
        <>
            <List>
                {reviews.length > 0 && reviews.map((element) => <Reviews key={element.id} data={element} />)}
            </List>
        </>
    );
};

export default MovieReviews;