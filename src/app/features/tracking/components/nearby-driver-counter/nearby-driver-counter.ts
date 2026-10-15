import { Component, computed, effect } from '@angular/core';

@Component({
  selector: 'app-nearby-driver-counter',
  imports: [],
  templateUrl: './nearby-driver-counter.html',
  styleUrl: './nearby-driver-counter.css',
})
export class NearbyDriverCounter {
  //nearbyDrivers = signal(5);
  nearbyDrivers: number = 5;

  //need of computed
  /*
  availabilityStatus is NOT independent state.
It depends on nearbyDrivers.
  */

  //Calculate and return a value- purpose of computed()
  availabilityStatus = computed(() => {
    //return this.nearbyDrivers() > 3 ? 'Drivers Available' : 'Limited Drivers';
    return this.nearbyDrivers > 3
      ? ' Ample amount of Drivers Available'
      : 'Limited Drivers - High demand';
  });

  constructor() {
    setInterval(() => {
      const randomDrivers = Math.floor(Math.random() * 10);

      //this.nearbyDrivers.set(randomDrivers);
      this.nearbyDrivers = randomDrivers;
      console.log('construtor', this.nearbyDrivers);
    }, 2000);

    //Logging, analytics, external synchronization - effect()
    effect(() => {
      //  console.log('Nearby Drivers:', this.nearbyDrivers());
      console.log('Nearby Drivers:', this.nearbyDrivers);
    });
  }
  //for checking if only this component renders using signal
  trackRender() {
    console.log('trackrender - NearbyDriverCounter Checked');

    return '';
  }
}
