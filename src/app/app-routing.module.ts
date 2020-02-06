import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {PlaneComponent} from './components/main/plane/plane.component';
import {CardboxPlaneComponent} from './components/main/home/cardbox/cardbox-plane/cardbox-plane.component';
import {HotelComponent} from './components/main/hotel/hotel.component';
import {CardboxHotelComponent} from './components/main/home/cardbox/cardbox-hotel/cardbox-hotel.component';
import {TrainComponent} from './components/main/train/train.component';
import {HomeComponent} from './components/main/home/home.component';
import {CarComponent} from './components/main/car/car.component';
import {CardboxCarComponent} from './components/main/home/cardbox/cardbox-car/cardbox-car.component';
import {EntertainmentComponent} from './components/main/entertainment/entertainment.component';
import {MapComponent} from './components/main/hotel/map/map.component';
import {SearchHotelComponent} from './components/main/hotel/search-hotel/search-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'Flight',
        component: PlaneComponent
      },
      {
        path: 'Hotel',
        children: [
          {
            path: '',
            component: HotelComponent,
          },
          {
            path: 'Map',
            component: MapComponent
          },
          {
            path: 'Search',
            component: SearchHotelComponent
          }
        ]
      },
      {
        path: 'Train',
        component: TrainComponent
      },
      {
        path: 'Car Rental',
        component: CarComponent
      },
      {
        path: 'Entertainment',
        component: EntertainmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
