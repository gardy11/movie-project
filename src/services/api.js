import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWRkMzUwYjQ4MDRhOTU1NDY5NzlhYTQ1MDRjOTBmZCIsInN1YiI6IjYyYTE4OTgxMTIxOTdlNTY1ZWE4NzY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uXMnMMZkZX55W6RBAHZeXZai-uxwAdU3-ewIk594ssg";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}` ,
        // Authorization: `Bearer ${process.env.VUE_APP_TMDB_TOKEN}`,
    },
});



// const corsURL = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
// const apiURL = 'https://api.themoviedb.org/3'; // origin api url
// // api call
// axios
// .get(`${corsURL}${apiURL}`, {

// })
// .then((response) => (console.log(response))) // 把结果集传到info这个数组
// .catch((error) => {
//     console.warn(error);
// });

// export default axios.create{(
//     `${corsURL}${apiURL}`,
//     headers: {
//         Authorization: `Bearer ${token}` ,
//         // Authorization: `Bearer ${process.env.VUE_APP_TMDB_TOKEN}`,
//     },
// )};


