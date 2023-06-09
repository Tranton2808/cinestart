import { useEffect, useState } from "react";
import axios from "axios";

import requests from "../api/api.js";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[700px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[700px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 sm:p-24 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-6xl sm:mb-4 font-semibold">
            {movie?.title}
          </h1>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
          <div className="my-4">
            <button className="border rounded-3xl bg-red-600 text-black border-red-600 py-2 px-5 hover:bg-red-600/80 font-medium">
              Play
            </button>
            <button className="border rounded-3xl text-white border-red-600 py-2 px-5 ml-4 hover:bg-red-600 font-medium">
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
