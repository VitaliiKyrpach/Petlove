import { Routes } from '@angular/router';
// import { NewsPageComponent } from './components/news-page/news-page.component';
// import { FindPageComponent } from './components/find-page/find-page.component';
// import { FriendsPageComponent } from './components/friends-page/friends-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfilePageComponent } from './components/profile/profile-page.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { AddPetPageComponent } from './components/add-pet-page/add-pet-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-pet',
    // loadComponent: () =>
    //   import('./components/add-pet-page/add-pet-page.component').then(
    //     (c) => c.AddPetPageComponent
    //   ),
    component: AddPetPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./components/news-page/news-page.component').then(
        (c) => c.NewsPageComponent
      ),
  },
  {
    path: 'notices',
    loadComponent: () =>
      import('./components/find-page/find-page.component').then(
        (c) => c.FindPageComponent
      ),
  },
  {
    path: 'friends',
    loadComponent: () =>
      import('./components/friends-page/friends-page.component').then(
        (c) => c.FriendsPageComponent
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
