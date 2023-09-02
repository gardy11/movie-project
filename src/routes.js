import VueRouter from 'vue-router';
import HomeWorld from './components/front/HomeWorld';
import MovieData from './components/movies/MovieData';
import ActorsData from './components/actors/ActorsData';
import ActorDetail from './components/actors/ActorDetail';
import WatchMovie from './components/movies/WatchMovie'

let router = new VueRouter({
    // 要把 mode: history 改成下面這兩行,github page切換的路由 refresh時才不會出現404錯誤
    // mode: "history",
    mode: "hash",
    base: "/movie-project/",
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
            path: "/movie/:id",
            name: "movie",
            component: MovieData,
        },
        {
            path: "/actors",
            name: "actors",
            component: ActorsData,
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
