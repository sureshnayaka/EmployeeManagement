import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        pathMatch: 'full',
        path: 'home',
        component: HomeComponent
    },

    { path: '**', redirectTo: '/home' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {}), HomeComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
