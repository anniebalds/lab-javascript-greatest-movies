// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  const onlyDirectors = arrayOfMovies.map((movie) => {
    return movie.director;
  });

  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  const spielbergFilms = arrayOfMovies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return spielbergFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayOfMovies) {
    if (arrayOfMovies.length === 0) return 0;

  const totalScores = arrayOfMovies.reduce((acc, current) => {
    
    return acc + current.score;
  }, 0);
  
  const avg = totalScores / arrayOfMovies.length
  return Number(avg.toFixed(2));
}

// i am not sure where to put this as it ruins other tests when i add it:
//totalScores += current.score === "" ? 0: current.score;
//OR   if (!current.score) {totalScores += 0}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayOfMovies) {
  const dramaMovies = arrayOfMovies.filter((movie) => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0) {return 0}

  const totalDramaScores = dramaMovies.reduce((acc, current) => {
    return acc + current.score;
  }, 0);

  const aveDrama = totalDramaScores / dramaMovies.length;

  return Number(aveDrama.toFixed(2));
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies) {
  const moviesToSort = [...arrayOfMovies];

  moviesToSort.sort(function (a,b) {
    if (a.year === b.year) {

      return b.title - a.title
    }
    return a.year - b.year
  })
  return moviesToSort
}

//the alphatical test isn't working :(


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  const newArray  = [...arrayOfMovies];

    const onlyTitles = newArray.map((movie) => {return movie.title});

    const alphTitles = onlyTitles.sort();

    const topTwenty = alphTitles.slice(0, 20)

    return topTwenty
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average  Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
