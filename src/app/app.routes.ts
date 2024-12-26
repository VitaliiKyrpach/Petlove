import { Routes } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { FindPageComponent } from './components/find-page/find-page.component';
import { FriendsPageComponent } from './components/friends-page/friends-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [{
    path: '',
    component: HomePageComponent
},{
    path: 'news',
    component: NewsPageComponent
},{
    path: 'notices',
    component: FindPageComponent
},{
    path: 'friends',
    component: FriendsPageComponent
},{
    path: 'login',
    component: LoginComponent
},{
    path: 'registration',
    component: RegistrationComponent
},{
    path: '**',
    component: NotFoundComponent
}];
