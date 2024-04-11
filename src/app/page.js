
import Image from "next/image";
import bg from "../../public/bg.webp";
import { getMovieService } from "@/services/product.service";
import CardComponent from "@/components/CardComponent.";

export default async function Home() {

const movie = await getMovieService();

let genre = [];
{movie.payload.map(e => {
  if (!genre.includes(e.genre)){
    genre.push(e.genre);
  }
}) }

console.log(genre)

  return (
    <main>
      <Image className="w-full brightness-50 z-0 h-[650px] px-7" src={bg} />
      <h1 className=" mt-5 font-bold m-5">All Movie</h1>
      <CardComponent dataMovie={movie.payload} />
      {genre.map(e => (
        <h1 className=" mt-5 m-5">
          {e} Movie
          <CardComponent dataMovie = {movie.payload.filter((item) => item.genre === e)} /> 
        </h1>
      ))}
    </main>
  );
}
