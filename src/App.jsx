import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Fullpage from "./components/FullPages/Fullpage";
import { useSelector } from "react-redux";
import api from "./api/endpoints";
import Details from "./pages/Details";
import { movieFullpage, tvFullpage } from "./fullpageDetails";

function App() {
  const apiKey = useSelector((state) => state.movie.apikey);
  api;

  return (
    <div className="">
      <Routes>
        {/* Sign In & Up */}
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />

        {/* Navigation Layout */}
        <Route element={<Layout />}>
          {/*  Home */}
          <Route index element={<Home />} />

          {/* Movie & Tv Details Page */}
          <Route path="/details/:type/:id" element={<Details />} />

          {/* Movies Routes */}
          <Route path="movies">
            {/* Top Categories In One Page */}
            <Route index element={<Movies />} />

            {/* Sell ALl Page */}
            {movieFullpage.map((fullpageShow, idx) => {
              return (
                <Route
                  key={idx}
                  path={fullpageShow.path}
                  element={
                    <Fullpage apiKey={apiKey} {...fullpageShow.element} />
                  }
                />
              );
            })}
          </Route>

          {/* Tvs Routes */}
          <Route path="tv-series">
            {/* Top Categories In One Page */}
            <Route index element={<Tv />} />

            {/* Sell ALl Page */}
            {tvFullpage.map((fullpageShow, idx) => {
              return (
                <Route
                  key={idx}
                  path={fullpageShow.path}
                  element={
                    <Fullpage apiKey={apiKey} {...fullpageShow.element} />
                  }
                />
              );
            })}
          </Route>

          {/* Upcoming */}
          <Route
            path="up-coming"
            element={
              <Fullpage
                apiKey={apiKey}
                queryTitle={"upcoming-movies"}
                title={"Upcoming"}
                queryFn={api.fetchUpcomingMovies}
                type="movie"
              />
            }
          />
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
