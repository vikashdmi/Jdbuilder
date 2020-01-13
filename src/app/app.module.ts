import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobServiceService } from './services/job-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptors';
import { LoaderComponent } from './shared/loader/loader.component';
import { Job1ServiceService } from './modules/job/job-service.service';
import {
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { DummyComponent } from './dummy/dummy.component';
import { ToastrModule } from 'ngx-toastr';
// import { JobModule } from './modules/job/job.module';
@NgModule({
  declarations: [
    AppComponent,
    JobListingComponent,
    PageNotFoundComponent,
    JobDetailComponent,
    HeaderComponent,
    SidebarComponent,
    LoaderComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    // JobModule
  ],
  providers: [JobServiceService, LoaderService, Job1ServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
