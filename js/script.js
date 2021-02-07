const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '0');
const personalMovieDB = {
    count: {numberOfFilms},
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой послединй фильм вы смотрели?', ''),
      b = prompt('Сколько баллов ему поставите?', ''),
      c = prompt('Какой послединй фильм вы смотрели??', ''),
      d = prompt('Сколько баллов ему поставите?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);