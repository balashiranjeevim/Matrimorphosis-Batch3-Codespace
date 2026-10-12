import { Component } from '@angular/core';
import { RideAnalytics } from '../ride-analytics/ride-analytics';

@Component({
  selector: 'app-service-dashboard',
  imports: [RideAnalytics],
  templateUrl: './service-dashboard.html',
  styleUrl: './service-dashboard.css',
})
export class ServiceDashboard {
  showAnalytics = true;
  services = [
    {
      title: 'Bike Ride',
      rides: 1200,
      earnings: 45000,
    },
    {
      title: 'Cab Ride',
      rides: 850,
      earnings: 92000,
    },
    {
      title: 'Rental Service',
      rides: 430,
      earnings: 67000,
    },
  ];
}
