//Get All Movie
export async function getMovieService() {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");

  //convert from json to java script object
  const data = res.json();
  return data;
}

// Get movie By genre
export async function getMovieByIdService(genre) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/genre=${genre}`);

    //convert from json to java script object
    const data = res.json();
    return data;
}

// Get movie By genre
export async function getMovieById(movie_id) {
  const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${movie_id}`);

  //convert from json to java script object
  const data = res.json();
  return data;
}
