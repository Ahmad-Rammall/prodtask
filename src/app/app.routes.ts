import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // Example route for a page with header and footer
      // Add more routes here for pages with header and footer
    ],
  },
];
