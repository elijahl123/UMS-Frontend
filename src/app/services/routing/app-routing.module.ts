import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      loadChildren: () => import('../../components/features/dashboard/dashboard.module').then(m => m.DashboardModule)
   },
   {
      path: 'calendar',
      loadChildren: () => import('../../components/features/calendar/calendar.module').then(m => m.CalendarModule)
   },
   {
      path: 'schedule',
      loadChildren: () => import('../../components/features/schedule/schedule.module').then(m => m.ScheduleModule)
   },
   {
      path: 'homework',
      loadChildren: () => import('../../components/features/homework/homework.module').then(m => m.HomeworkModule)
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}
