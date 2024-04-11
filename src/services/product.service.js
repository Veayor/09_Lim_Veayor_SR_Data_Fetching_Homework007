//Get All Movie
export async function getMovieService() {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");

  //convert from json to java script object
  const data = res.json();
  return data;
}

// Get movie By Id
export async function getMovieByIdService(genre) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/genre=${genre}`);

    //convert from json to java script object
    const data = res.json();
    return data;
}
