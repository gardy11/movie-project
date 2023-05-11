import VueRouter from 'vue-router';
import HomeWorld from './components/front/HomeWorld';
import MovieData from './components/movies/MovieData';
import ActorsData from './components/actors/ActorsData';
import ActorDetail from './components/actors/ActorDetail';
import WatchMovie from './components/movies/WatchMovie';
import searchBar from './components/header/SearchBar'

let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: { name: 'home' }
        },
        {
            // path: "/",
            path: "/movie-project/",
            name: "home",
            component: HomeWorld,
        },
        {
            path: "/movie-project/movie/:id",
            name: "movie",
            component: MovieData
        },
        {
            path: "/actors",
            name: "actors",
            component: ActorsData
        },
        {
            path: "/actor/:id",
            name: "actor",
            component: ActorDetail,
        },
        {
            path: "/collect",
            name: "collect",
            component: WatchMovie,
        },
    ],


});


export default router;
