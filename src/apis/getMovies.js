import axios from "axios";

export const getMovies = () =>
  axios.get("https://wookie.codesubmit.io/movies", {
    headers: { Authorization: "Bearer Wookie2019" },
  });
