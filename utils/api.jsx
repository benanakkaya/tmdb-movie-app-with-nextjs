
export const fethCategories = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=tr-TR`);
    return res.json();
}

export const fetchPopularMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=tr-TR&region=TR`);
    return res.json();
}

export const fetchSearchedMovie = async (value) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=tr-TR&page=1&query=${value}`);
    return res.json();
}

export const fetchUpcomingMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=tr-TR&page=1   `);
    return res.json();
}

export const fetchAllMovies = async (page) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=tr-TR&page=${page}&region=TR`);
        return res.json();
}

export const fetchTrendMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&language=tr-TR&region=TR  `);
    return res.json();
}

export const fetchMovieDetails = async (movieID) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}&language=tr-TR&append_to_response=similar,videos,credits`);
    return res.json();
}




