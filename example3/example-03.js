"use strict";

const movieDescription = document.querySelector("#movie-description");
const moviePoster = document.querySelector("#movie-poster");

const options = {
  method: "GET",
  mode: "cors",
};

async function getMovie(slug) {
  const URL = `https://api.andrespecht.dev/movie/${slug}`;

  try {
    const result = await fetch(URL, options);
    if (!result.ok) {
      throw new Error(`${result.statusText} (${result.status})`);
    }

    const data = await result.json();
    movieDescription.textContent = data.response.description;
    moviePoster.src = data.response.poster;
  } catch (error) {
    movieDescription.textContent =
      "An error occurred while fetching the movie description.";
    console.error(error);
  }
}

getMovie("jurassic-park");
