import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {ApolloModule} from 'apollo-angular';
import {GraphQLModule} from './graphql.module';
import {JwtModule} from '@auth0/angular-jwt';
import {Ng5SliderModule} from 'ng5-slider';
import {NgxContentLoadingModule} from 'ngx-content-loading';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {
  MatDialogModule,
  MatNativeDateModule,
  MatButtonModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatChipsModule
} from '@angular/material';


import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {TextFieldComponent} from './components/core/text-field/text-field.component';
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from './components/core/footer/footer.component';
import {ImageTextComponent} from './components/core/image-text/image-text.component';
import {NavbarComponent} from './components/core/navbar/navbar.component';
import {NavbarDropdownComponent} from './components/core/navbar/navbar-dropdown/navbar-dropdown.component';
import {RegisterComponent} from './components/register/register.component';
import {PlaneComponent} from './components/main/plane/plane.component';
import {HotelComponent} from './components/main/hotel/hotel.component';
import {TrainComponent} from './components/main/train/train.component';
import {HomeComponent} from './components/main/home/home.component';
import {CustomMenuLinkComponent} from './components/core/custom-menu-link/custom-menu-link.component';
import {PasswordFieldComponent} from './components/core/password-field/password-field.component';
import {OptionFieldComponent} from './components/core/option-field/option-field.component';
import {CarComponent} from './components/main/car/car.component';
import {EntertainmentComponent} from './components/main/entertainment/entertainment.component';
import {OrderComponent} from './components/main/order/order.component';
import {ProfileComponent} from './components/core/navbar/profile/profile.component';
import {CardboxComponent} from './components/main/home/cardbox/cardbox.component';
import {CardboxImagetextComponent} from './components/main/home/cardbox/cardbox-imagetext/cardbox-imagetext.component';
import {CardboxPlaneComponent} from './components/main/home/cardbox/cardbox-plane/cardbox-plane.component';
import {CardboxCarComponent} from './components/main/home/cardbox/cardbox-car/cardbox-car.component';
import {CardboxHotelComponent} from './components/main/home/cardbox/cardbox-hotel/cardbox-hotel.component';
import {MapComponent} from './components/main/hotel/map/map.component';
import {RecHotelComponent} from './components/main/home/rec-hotel/rec-hotel.component';
import {StarBarComponent} from './components/core/star-bar/star-bar.component';
import {FlightClassComponent} from './components/main/home/cardbox/cardbox-plane/flight-class/flight-class.component';
import {HotelRoomComponent} from './components/main/home/cardbox/cardbox-hotel/hotel-room/hotel-room.component';
import {SearchHotelComponent} from './components/main/hotel/search-hotel/search-hotel.component';
import {DetailHotelComponent} from './components/main/hotel/detail-hotel/detail-hotel.component';
import {HotelHistoryComponent} from './components/main/home/cardbox/cardbox-hotel/hotel-history/hotel-history.component';
import {SearchCarComponent} from './components/main/car/search-car/search-car.component';
import {LoginAdminComponent} from './components/admin/login-admin/login-admin.component';
import {HotelAdminComponent} from './components/admin/hotel-admin/hotel-admin.component';
import {HomeAdminComponent} from './components/admin/home-admin/home-admin.component';
import {DialogConfirmationComponent} from './components/admin/core/dialog-confirmation/dialog-confirmation.component';
import {DialogErrorComponent} from './components/admin/core/dialog-error/dialog-error.component';
import {InsertHotelAdminComponent} from './components/admin/hotel-admin/insert-hotel-admin/insert-hotel-admin.component';
import {UpdateHotelAdminComponent} from './components/admin/hotel-admin/update-hotel-admin/update-hotel-admin.component';
import {TrainAdminComponent} from './components/admin/train-admin/train-admin.component';
import {EventAdminComponent} from './components/admin/event-admin/event-admin.component';
import {InsertTrainAdminComponent} from './components/admin/train-admin/insert-train-admin/insert-train-admin.component';
import {UpdateTrainAdminComponent} from './components/admin/train-admin/update-train-admin/update-train-admin.component';

import {icon, Marker} from 'leaflet';

import {SearchHotelPipe} from './pipe/hotel/search-hotel.pipe';
import {SortHotelPipe} from './pipe/hotel/sort-hotel.pipe';
import {SearchCarPipe} from './pipe/car/search-car.pipe';
import {SortCarPipe} from './pipe/car/sort-car.pipe';

const iconRetinaUrl = 'assets/leaflet/images/marker-icon-2x.png';
const iconUrl = 'assets/leaflet/images/marker-icon.png';
const shadowUrl = 'assets/leaflet/images/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    OptionFieldComponent,
    MainComponent,
    FooterComponent,
    ImageTextComponent,
    NavbarComponent,
    NavbarDropdownComponent,
    RegisterComponent,
    PlaneComponent,
    HotelComponent,
    TrainComponent,
    HomeComponent,
    CustomMenuLinkComponent,
    CarComponent,
    EntertainmentComponent,
    OrderComponent,
    ProfileComponent,
    CardboxComponent,
    CardboxImagetextComponent,
    CardboxPlaneComponent,
    CardboxCarComponent,
    CardboxHotelComponent,
    MapComponent,
    StarBarComponent,
    RecHotelComponent,
    FlightClassComponent,
    HotelRoomComponent,
    SearchHotelComponent,
    DetailHotelComponent,
    HotelHistoryComponent,
    SearchHotelPipe,
    SortHotelPipe,
    SearchCarComponent,
    SearchCarPipe,
    SortCarPipe,
    LoginAdminComponent,
    HotelAdminComponent,
    InsertHotelAdminComponent,
    UpdateHotelAdminComponent,
    HomeAdminComponent,
    DialogConfirmationComponent,
    DialogErrorComponent,
    TrainAdminComponent,
    InsertTrainAdminComponent,
    UpdateTrainAdminComponent,
    EventAdminComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    InsertHotelAdminComponent,
    UpdateHotelAdminComponent,
    InsertTrainAdminComponent,
    UpdateTrainAdminComponent,
    DialogConfirmationComponent,
    DialogErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    GraphQLModule,
    MatNativeDateModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access-token');
        },
        // whitelistedDomains: ['localhost'],
        blacklistedRoutes: ['localhost']
      }
    }),
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    Ng5SliderModule,
    MatSelectModule,
    NgxContentLoadingModule,
    MatButtonModule,
    MatTooltipModule,
    InfiniteScrollModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatTableModule
  ]
})

export class AppModule {
}

