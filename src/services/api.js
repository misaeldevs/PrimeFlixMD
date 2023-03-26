//Base da URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=dac46100424a715437d482b60c9d212e&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})

export default api