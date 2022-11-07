import React from "react";
import Gener from "../components/Gener/Gener";
import TopNav from "../components/TopNav/TopNav";
import { getMovies } from "../apis/getMovies";
import "./LandingPage.css";
import cogoToast from "cogo-toast";

function LandingPage() {
  const [movies, setMovies] = React.useState([]);

  const getMoviesAPI = async () => {
    try {
      let response = await getMovies();
      setMovies(response.data.movies);
    } catch (error) {
      cogoToast.error("Sorry error inloading movies");
    }
  };

  React.useEffect(() => {
    getMoviesAPI();
  }, []);

  return (
    <div className="lpContainer">
      <TopNav />
      <div className="lpBody">
        {movies.length > 0 && (
          <>
            <Gener
              title={"Action"}
              movies={movies.filter((val) => val.genres.includes("Action"))}
            />
            <Gener
              title={"Animation"}
              movies={movies.filter(
                (val) =>
                  val.genres.includes("Animation") &&
                  !val.genres.includes("Action")
              )}
            />
            <Gener
              title={"Drama"}
              movies={movies.filter(
                (val) =>
                  val.genres.includes("Drama") &&
                  !val.genres.includes("Action") &&
                  !val.genres.includes("Animation")
              )}
            />
            <Gener
              title={"Crime"}
              movies={movies.filter(
                (val) =>
                  val.genres.includes("Crime") &&
                  !val.genres.includes("Action") &&
                  !val.genres.includes("Animation") &&
                  !val.genres.includes("Drama")
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}
export default LandingPage;
