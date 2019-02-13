import { Routes, RouterModule } from '@angular/router';
import { DayComponent } from './day/day.component';

export const AppRoutes: Routes = [
  { path: '',
     redirectTo: 'home',
     pathMatch: 'full'
 },
 { path: 'home', component: DayComponent},
 { path: '**', redirectTo: '/'}
];
