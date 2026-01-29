import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { GameDetail } from './components/game-detail/game-detail';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "games/:id",
        component: GameDetail
    }
];
