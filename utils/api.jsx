
export const fethCategories = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=tr-TR`);
    return res.json();
}

export const fetchPopularMovies = async (pageValue) => {
    let page = pageValue ? pageValue : 1;
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}&language=tr-TR&region=TR`);
    return res.json();
}

export const fetchSearchedMovie = async (value) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=tr-TR&page=1&query=${value}`);
    return res.json();
}

export const fetchUpcomingMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=tr-TR&page=1`);
    return res.json();
}

export const fetchMovies = async (category,year,pageValue) => {
    let page = pageValue ? pageValue : 1;
    if(year){
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=tr-TR&page=${page}&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31with_genres=${category}&sort_by=vote_count.desc`);
        return res.json();
    }else{
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=tr-TR&page=${page}&with_genres=${category}&sort_by=vote_count.desc`);
        return res.json();
    }
}

export const fetchTrendMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&language=tr-TR&region=TR  `);
    return res.json();
}

export const fetchMovieDetails = async (movieID) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}&language=tr-TR&append_to_response=similar,videos,credits`);
    return res.json();
}



