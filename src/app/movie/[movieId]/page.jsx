import { getMovieByIdService } from "@/services/product.service";
import { data } from "autoprefixer";
import React from "react";

const Movie = async ({ params }) => {
  
  const movieData = await getMovieByIdService(params.movieId);

  console.log("Movie Datadetail ById", movieData);
  return (
    <div>
      <div className=" bg-red-900 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 mt-24">
                <img
                  className="w-full h-full object-cover"
                  src={movieData.image}
                  alt="Movie Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 mt-24">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Movie Name
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex mb-4">
            
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {data.movieData}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

