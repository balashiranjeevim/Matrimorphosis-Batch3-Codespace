import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { RideSelection } from './features/rides/components/ride-selection/ride-selection';
import { NearbyDrivers } from './features/rides/components/nearby-drivers/nearby-drivers';
import { RideHistoryDetailsPage } from './features/rides/pages/ride-history-details-page/ride-history-details-page';
import { RideHistory } from './features/rides/components/ride-history/ride-history';
export const routes: Routes = [
  {
    path: 'ride-history',
    component: RideHistory,
  },

  {
    path: 'ride-history/:id',
    component: RideHistoryDetailsPage,
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: Home,
  },

  {
    path: 'rides',
    component: RideSelection,
  },

  {
    path: 'drivers',
    component: NearbyDrivers,
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/components/service-dashboard/service-dashboard').then(
        (m) => m.ServiceDashboard,
      ),
  },
];
