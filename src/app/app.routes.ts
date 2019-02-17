import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
  { path: '',
     redirectTo: '/',
     pathMatch: 'full'
 },
 { path: '', component: AppComponent},
 { path: '**', redirectTo: '/'}
];
