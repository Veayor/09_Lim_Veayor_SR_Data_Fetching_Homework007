
import React from "react";
import Link from "next/link";
const CardComponent = async ({dataMovie}) => {
  return (
    <main>
      <div className=" flex gap-5 p-5  overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
        {/* Movie ALl mapper */}
        {dataMovie.map((data) => (
          <Link href={`/movie/${data?.movie_id}`} scroll={false}>
            <div
              key={data.movieData}
              className="card w-96 h-[380px] bg-base-100 shadow-xl rounded-lg p-5 bg-slate-400">
              <figure>
                <img src={data.image || 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'} alt="movie" />
              </figure>
              <div className=" w-[200px]">
                <h1 className=" font-bold mt-3">{data.movie_title}</h1>
                <p className=" line-clamp-3 mt-2">{data.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

     
    </main>
  );
};

export default CardComponent;
