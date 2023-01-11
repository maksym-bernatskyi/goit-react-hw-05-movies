import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "notiflix/build/notiflix-aio";

const Layout = lazy(() => import("./Layout/Layout"));

const HomePage = lazy(() => import("./pages/HomePage"));

const MoviesPage = lazy(() => import("./pages/MoviesPage"));

const MoviesDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

const MovieCredits = lazy(() => import("./MovieCredits"));

const MovieReviews = lazy(() => import("./MovieReviews"));

export default function App() {
  return (
    <Suspense
      fallback={Loading.circle({
        svgColor: "#ff6b01",
        cssAnimationDuration: 800,
      })}
      >
        {Loading.remove()}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<MovieCredits />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
  );
}