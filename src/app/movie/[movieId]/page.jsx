import { getMovieById } from "@/services/movie.service";
import { data } from "autoprefixer";
import React from "react";

const Movie = async ({ params }) => {
  const data = await getMovieById(params.movieId);

  console.log("Movie Datadetail ById", data);
  return (
    <div>
      <div className=" bg-red-900 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 mt-24">
                <img
                  className="w-full h-full object-cover"
                  src={data.payload.image}
                  alt="Movie Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 mt-24">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {data.payload.director}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {data.payload.genre}
              </p>
              <div className="flex mb-4">
                <div>
                  <h1>{data.payload.movie_title}({data.payload.released_year})</h1>

                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {data.payload.description}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <p>{data.payload.posted_at}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
