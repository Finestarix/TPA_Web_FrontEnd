import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {TextFieldComponent} from './components/core/text-field/text-field.component';
import {MainComponent} from './components/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';
import {ImageTextComponent} from './components/core/image-text/image-text.component';
import {NavbarMenuComponent} from './components/core/navbar-menu/navbar-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NavbarDropdownComponent} from './components/navbar/navbar-dropdown/navbar-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    LoginComponent,
    TextFieldComponent,
    MainComponent,
    FooterComponent,
    ImageTextComponent,
    NavbarComponent,
    NavbarDropdownComponent
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
