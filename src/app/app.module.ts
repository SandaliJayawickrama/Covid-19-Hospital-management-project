
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomePageHeaderComponentComponent } from './Home-Page/home-page-header-component/home-page-header-component.component';
import { HomePageContentComponentComponent } from './Home-Page/home-page-content-component/home-page-content-component.component';
import { HomePageComponentComponent } from './Home-Page/home-page-component/home-page-component.component';
import { PharmacyHomePageComponentComponent } from './Pharmacy-home-page/pharmacy-home-page-component/pharmacy-home-page-component.component';
import { PharmacyHomePageBodyComponentComponent } from './Pharmacy-home-page/pharmacy-home-page-body-component/pharmacy-home-page-body-component.component';
import { PharmacyHomePageHeaderComponentComponent } from './Pharmacy-home-page/pharmacy-home-page-header-component/pharmacy-home-page-header-component.component';
import { PharmacyUIHeaderComponentComponent } from './Pharmacy-UI-page/pharmacy-ui-header-component/pharmacy-ui-header-component.component';
import { PharmacyUIBodyComponentComponent } from './Pharmacy-UI-page/pharmacy-ui-body-component/pharmacy-ui-body-component.component';
import { PharmacyUIComponentComponent } from './Pharmacy-UI-page/pharmacy-ui-component/pharmacy-ui-component.component';
import { PharmacyOrderComponentComponent } from './Pharmacy-order-page/pharmacy-order-component/pharmacy-order-component.component';
import { PharmacyOrderHeaderComponentComponent } from './Pharmacy-order-page/pharmacy-order-header-component/pharmacy-order-header-component.component';
import { PharmacyOrderBodyComponentComponent } from './Pharmacy-order-page/pharmacy-order-body-component/pharmacy-order-body-component.component';
import { OrderConfirmComponentComponent } from './order-confirm-page/order-confirm-component/order-confirm-component.component';
import { OrderConfirmHeaderComponentComponent } from './order-confirm-page/order-confirm-header-component/order-confirm-header-component.component';
import { OrderConfirmBodyComponentComponent } from './order-confirm-page/order-confirm-body-component/order-confirm-body-component.component';
import { OrderHistoryBodyComponentComponent } from './order-history-page/order-history-body-component/order-history-body-component.component';
import { OrderHistoryComponentComponent } from './order-history-page/order-history-component/order-history-component.component';
import { OrderHistoryHeaderComponrntComponent } from './order-history-page/order-history-header-componrnt/order-history-header-componrnt.component';
import { PharmacyFilterPipe } from './shared/pharmacy-filter.pipe';
import { PrescriptionHeaderComponentComponent } from './Prescription-Page/prescription-header-component/prescription-header-component.component';
import { PrescriptionBodyComponentComponent } from './Prescription-Page/prescription-body-component/prescription-body-component.component';
import { PrescriptionComponentComponent } from './Prescription-Page/prescription-component/prescription-component.component';
import { ImageUploaderBodyComponentComponent } from './Image-Uploader-Page/image-uploader-body-component/image-uploader-body-component.component';
import { ImageUploaderComponentComponent } from './Image-Uploader-Page/image-uploader-component/image-uploader-component.component';
import { PharmacyAdminComponentComponent } from './Pharmacy-admin-dashboard-Page/pharmacy-admin-component/pharmacy-admin-component.component';
import { PharmacyAdminDashboardBodyComponentComponent } from './Pharmacy-admin-dashboard-Page/pharmacy-admin-dashboard-body-component/pharmacy-admin-dashboard-body-component.component';
import { PharmacyAdminAddBodyComponentComponent } from './admin-pharmacy-add-page/pharmacy-admin-add-body-component/pharmacy-admin-add-body-component.component';
import { PharmacyAdminAddComponentComponent } from './admin-pharmacy-add-page/pharmacy-admin-add-component/pharmacy-admin-add-component.component';
import { PharmacyAdminViewComponentComponent } from './admin-pharmacy-view-page/pharmacy-admin-view-component/pharmacy-admin-view-component.component';
import { PharmacyAdminViewBodyComponentComponent } from './admin-pharmacy-view-page/pharmacy-admin-view-body-component/pharmacy-admin-view-body-component.component';
import { OrderReportComponentComponent } from './order-report-page/order-report-component/order-report-component.component';
import { OrderReportBodyComponentComponent } from './order-report-page/order-report-body-component/order-report-body-component.component';
import { BarchartComponentComponent } from './BarChart-Page/barchart-component/barchart-component.component';
import { BarchartBodyComponentComponent } from './BarChart-Page/barchart-body-component/barchart-body-component.component';
import { ImageUploadBodyComponentComponent } from './image-upload-page/image-upload-body-component/image-upload-body-component.component';
import { ImageUploadComponentComponent } from './image-upload-page/image-upload-component/image-upload-component.component';

//muthuni
import { ReservationComponent } from './reservation/reservation.component';
import { QdetailsComponent } from './qdetails/qdetails.component';


import { SiteAdminLoginComponent } from './Admin-Ui/site-admin-login/site-admin-login.component';
import { HospitaAdminSignupComponent } from './Admin-Ui/hospita-admin-signup/hospita-admin-signup.component';
import { UserLoginComponent } from './manage-user/user-login/user-login.component';
import { UserSignupComponent } from './manage-user/user-signup/user-signup.component';
import { SiteAdminPageComponent } from './Admin-Ui/site-admin-page/site-admin-page.component';
import { HospitalAdminContactComponent } from './Admin-Ui/hospital-admin-contact/hospital-admin-contact.component';
import { SiteAdminComponent } from './Admin-Ui/site-admin/site-admin.component';

import { A_headerComponent } from './header/A_header';
import { C_headerComponent } from './header/C_header';
import { footerComponent } from './header/footer';
import { InfectedListComponent } from './infected-list/infected-list.component';
import { InfectedComponent } from './infected/infected.component';
import { RecentListComponent } from './recent-list/recent-list.component';
import { RecentlyVisitedComponent } from './recently-visited/recently-visited.component';
import { ReportComponent } from './report/report.component';
import { TrackPatientsComponent } from './track-patients/track-patients.component';

import { VaccinehomeComponent } from './Vaccination/VaccineHomepage/vaccinehome/vaccinehome.component';
import { VaccineResComponent } from './Vaccination/vaccine-res/vaccine-res.component';
import { ViewreservationsComponent } from './Vaccination/viewreservations/viewreservations.component';



//Sandali
import { HospitalHeaderComponent } from './Hospital-admin/hospital-header/hospital-header.component';
import { HospitalBodyComponent } from './Hospital-admin/hospital-body/hospital-body.component';
import { HospitalHomeComponentsComponent } from './Hospital-admin/hospital-home-components/hospital-home-components.component';
import { VacAddComponent } from './Vaccination/vac-add/vac-add.component';
import { VacAddComponentComponent } from './Vaccination/vac-add-component/vac-add-component.component';
import { VacDisplayComponent } from './Vaccination/vac-display/vac-display.component';
import { VacDisplayComponentsComponent } from './Vaccination/vac-display-components/vac-display-components.component';
import { VacHeaderComponent } from './Vaccination/vac-header/vac-header.component';
import { DrApHeaderComponent } from './Doctor-appointments/dr-ap-header/dr-ap-header.component';
import { DrApAddComponent } from './Doctor-appointments/dr-ap-add/dr-ap-add.component';
import { DrApAddComponentsComponent } from './Doctor-appointments/dr-ap-add-components/dr-ap-add-components.component';
import { DrApDisplayComponent } from './Doctor-appointments/dr-ap-display/dr-ap-display.component';
import { DrApDisplayComponentsComponent } from './Doctor-appointments/dr-ap-display-components/dr-ap-display-components.component';
import { DoctorAddComponent } from './Doctors/doctor-add/doctor-add.component';
import { DoctorAddComponentsComponent } from './Doctors/doctor-add-components/doctor-add-components.component';
import { DoctorDisplayComponent } from './Doctors/doctor-display/doctor-display.component';
import { DoctorDisplayComponentsComponent } from './Doctors/doctor-display-components/doctor-display-components.component';
import { DoctorHeaderComponent } from './Doctors/doctor-header/doctor-header.component';

import { DrAppointmentComponent } from './Doctor-appointments/dr-appointment/dr-appointment.component';
import { AppointmenthomepageComponent } from './Doctor-appointments/appointmenthomepage/appointmenthomepage.component';
import { ViewappointmentsComponent } from './Doctor-appointments/viewappointments/viewappointments.component';
import { AppointmentadminsideComponent } from './Doctor-appointments/appointmentadminside/appointmentadminside.component';
import { ReservationadminsideComponent } from './Vaccination/reservationadminside/reservationadminside.component';


import { VacReportAdminComponent } from './Vaccination/vac-report-admin/vac-report-admin.component';
import { VacReportComponentsComponent } from './Vaccination/vac-report-components/vac-report-components.component';

import { DoctorReportComponent } from './Doctors/doctor-report/doctor-report.component';
import { DoctorReportComponentsComponent } from './Doctors/doctor-report-components/doctor-report-components.component';

import { ViewCustomerHeaderComponentComponent } from './View-Customers-order-page/view-customer-header-component/view-customer-header-component.component';
import { ViewCustomerBodyComponentComponent } from './View-Customers-order-page/view-customer-body-component/view-customer-body-component.component';
import { ViewCustomerComponentComponent } from './View-Customers-order-page/view-customer-component/view-customer-component.component';
import { PadminDashBodyComponentComponent } from './Padmin-dash-page/padmin-dash-body-component/padmin-dash-body-component.component';
import { PadminDashComponentComponent } from './Padmin-dash-page/padmin-dash-component/padmin-dash-component.component';
import { PadminDashHeaderComponentComponent } from './Padmin-dash-page/padmin-dash-header-component/padmin-dash-header-component.component';
import { PadminDashSidenavComponentComponent } from './Padmin-dash-page/padmin-dash-sidenav-component/padmin-dash-sidenav-component.component';






import { MatOptionModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { ChartsService } from './charts.service';
import { CardCreateComponent } from './card/card-create/card-create.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CashCreateComponent } from './cash/cash-create/cash-create.component';
import { CashListComponent } from './cash/cash-list/cash-list.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { paymentMethodComponent } from './paymentMethod/paymentMethod.component';


//Naveen
import { LabHomeComponent } from './Lab/Lab-Home/Lab-Home.component';
import { trackProgressComponent } from './Lab/Track-Progress/Track-Progress.component';
import { LabMenuComponent } from './Lab/Lab-Menu/Lab-Menu.component';
import { labMain } from './Lab/Lab-Main/Lab-Main.component';
import { trackPageComponent } from './Lab/Track-page-main/track-page-main.component';
import { pcrBook } from './Lab/PCR-Book/pcr-book.component';
import { pcrBookMain } from './Lab/PCR-Book-main/pcr-book-main.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Laboratorian } from './Lab/Laboratorian/Laboratorian.component';
import { LaboratorianMain } from './Lab/Laboratorian-Main/Laboratorian-Main.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DatePipe} from '@angular/common';
import { getPcrComponent } from './Lab/get-pcr/get-pcr.component';
import { getPcrMainComponent } from './Lab/get-pcr-main/get-pcr-main.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageHeaderComponentComponent,
    HomePageContentComponentComponent,
    HomePageComponentComponent,
    PharmacyHomePageComponentComponent,
    PharmacyHomePageBodyComponentComponent,
    PharmacyHomePageHeaderComponentComponent,
    PharmacyUIHeaderComponentComponent,
    PharmacyUIBodyComponentComponent,
    PharmacyUIComponentComponent,
    PharmacyOrderComponentComponent,
    PharmacyOrderHeaderComponentComponent,
    PharmacyOrderBodyComponentComponent,
    OrderConfirmComponentComponent,
    OrderConfirmHeaderComponentComponent,
    OrderConfirmBodyComponentComponent,
    OrderHistoryBodyComponentComponent,
    OrderHistoryComponentComponent,
    OrderHistoryHeaderComponrntComponent,
    PharmacyFilterPipe,
    PrescriptionHeaderComponentComponent,
    PrescriptionBodyComponentComponent,
    PrescriptionComponentComponent,
    ImageUploaderBodyComponentComponent,
    ImageUploaderComponentComponent,
    PharmacyAdminComponentComponent,
    PharmacyAdminDashboardBodyComponentComponent,
    PharmacyAdminAddBodyComponentComponent,
    PharmacyAdminAddComponentComponent,
    PharmacyAdminViewComponentComponent,
    PharmacyAdminViewBodyComponentComponent,
    OrderReportComponentComponent,
    OrderReportBodyComponentComponent,
    BarchartComponentComponent,
    BarchartBodyComponentComponent,
    ImageUploadBodyComponentComponent,
    ImageUploadComponentComponent,
    ReservationComponent,
    QdetailsComponent,

    SiteAdminLoginComponent,
    HospitaAdminSignupComponent,
    UserLoginComponent,
    UserSignupComponent,
    SiteAdminPageComponent,
    HospitalAdminContactComponent,
    SiteAdminComponent,
    VaccinehomeComponent,
    VaccineResComponent,
    ViewreservationsComponent,




    HospitalHeaderComponent,
    HospitalBodyComponent,
    HospitalHomeComponentsComponent,
    VacAddComponent,
    VacAddComponentComponent,
    VacDisplayComponent,
    VacDisplayComponentsComponent,
    VacHeaderComponent,
    DrApHeaderComponent,
    DrApAddComponent,
    DrApAddComponentsComponent,
    DrApDisplayComponent,
    DrApDisplayComponentsComponent,
    DoctorAddComponent,
    DoctorAddComponentsComponent,
    DoctorDisplayComponent,
    DoctorDisplayComponentsComponent,
    DoctorHeaderComponent,


    InfectedComponent,
    RecentlyVisitedComponent,
    A_headerComponent,
    C_headerComponent,
    footerComponent,
    TrackPatientsComponent,
    InfectedListComponent,
    RecentListComponent,
    ReportComponent,



    DrAppointmentComponent,
    AppointmenthomepageComponent,
    ViewappointmentsComponent,
    AppointmentadminsideComponent,
    ReservationadminsideComponent,

    VacReportAdminComponent,
    VacReportComponentsComponent,

    DoctorReportComponent,
    DoctorReportComponentsComponent,

    ViewCustomerHeaderComponentComponent,
    ViewCustomerBodyComponentComponent,
    ViewCustomerComponentComponent,
    PadminDashBodyComponentComponent,
    PadminDashComponentComponent,
    PadminDashHeaderComponentComponent,
    PadminDashSidenavComponentComponent,



    paymentMethodComponent,
    CardCreateComponent,
    CashCreateComponent,
    CardListComponent,
    CashListComponent,
    PaymentReportComponent,


    LabHomeComponent,
    trackProgressComponent,
    LabMenuComponent,
    labMain,
    trackPageComponent,
    pcrBookMain,
    Laboratorian,
    LaboratorianMain,
    getPcrComponent,
    getPcrMainComponent,
    pcrBook
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    MatSliderModule,
    SlickCarouselModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,




    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatOptionModule,
    MatProgressSpinnerModule,

    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [ChartsService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
