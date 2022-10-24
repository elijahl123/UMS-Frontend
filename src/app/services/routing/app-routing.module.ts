import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('../../components/features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('../../components/features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'calendar',
    canActivate: [AuthGuard],
    loadChildren: () => import('../../components/features/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'schedule',
    canActivate: [AuthGuard],
    loadChildren: () => import('../../components/features/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'homework',
    canActivate: [AuthGuard],
    loadChildren: () => import('../../components/features/homework/homework.module').then(m => m.HomeworkModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
