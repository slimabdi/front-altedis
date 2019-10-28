import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import { AgmCoreModule } from '@agm/core';
import {UserService} from './shared/user.service';
import { SingUpComponent } from './sing-up/sing-up.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule } from '@angular/material';
import {TokenIntercptorService} from './token-intercptor.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthenticationComponent,
    SingUpComponent

  ],
  providers: [UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
