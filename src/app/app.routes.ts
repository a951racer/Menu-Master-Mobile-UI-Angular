import { Routes, RouterModule } from '@angular/router';
import { DayComponent } from './day/day.component';

export const AppRoutes: Routes = [
  { path: '',
     redirectTo: '/',
     pathMatch: 'full'
 },
 { path: '', component: DayComponent},
 { path: '**', redirectTo: '/'}
];
