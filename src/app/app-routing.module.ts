import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyAdminAddComponentComponent } from './admin-pharmacy-add-page/pharmacy-admin-add-component/pharmacy-admin-add-component.component';
import { PharmacyAdminViewComponentComponent } from './admin-pharmacy-view-page/pharmacy-admin-view-component/pharmacy-admin-view-component.component';
import { HospitaAdminSignupComponent } from './Admin-Ui/hospita-admin-signup/hospita-admin-signup.component';
import { HospitalAdminContactComponent } from './Admin-Ui/hospital-admin-contact/hospital-admin-contact.component';
import { HospitalAdminLoginComponent } from './Admin-Ui/hospital-admin-login/hospital-admin-login.component';
import { SiteAdminLoginComponent } from './Admin-Ui/site-admin-login/site-admin-login.component';
import { SiteAdminPageComponent } from './Admin-Ui/site-admin-page/site-admin-page.component';
import { BarchartComponentComponent } from './BarChart-Page/barchart-component/barchart-component.component';
import { HomePageComponentComponent } from './Home-Page/home-page-component/home-page-component.component';
import { PadminDashComponentComponent } from './Padmin-dash-page/padmin-dash-component/padmin-dash-component.component';


import { ImageUploadComponentComponent } from './image-upload-page/image-upload-component/image-upload-component.component';
import { ImageUploaderComponentComponent } from './Image-Uploader-Page/image-uploader-component/image-uploader-component.component';
import { UserLoginComponent } from './manage-user/user-login/user-login.component';
import { UserSignupComponent } from './manage-user/user-signup/user-signup.component';

import { InfectedListComponent } from './infected-list/infected-list.component';
import { InfectedComponent } from './infected/infected.component';
import { OrderConfirmComponentComponent } from './order-confirm-page/order-confirm-component/order-confirm-component.component';
import { OrderHistoryComponentComponent } from './order-history-page/order-history-component/order-history-component.component';
import { OrderReportComponentComponent } from './order-report-page/order-report-component/order-report-component.component';
import { PharmacyAdminComponentComponent } from './Pharmacy-admin-dashboard-Page/pharmacy-admin-component/pharmacy-admin-component.component';
import { PharmacyHomePageComponentComponent } from './Pharmacy-home-page/pharmacy-home-page-component/pharmacy-home-page-component.component';
import { PharmacyOrderComponentComponent } from './Pharmacy-order-page/pharmacy-order-component/pharmacy-order-component.component';
import { PharmacyUIComponentComponent } from './Pharmacy-UI-page/pharmacy-ui-component/pharmacy-ui-component.component';
import { PrescriptionComponentComponent } from './Prescription-Page/prescription-component/prescription-component.component';

//muthuni
import { ReservationComponent } from './reservation/reservation.component';

import { AuthGuardGuard } from './manage-user/auth-guard.guard';
import { SiteAdminComponent } from './Admin-Ui/site-admin/site-admin.component';
import { AdminLoginComponent } from './manage-user/admin-login/admin-login.component';
import { AdminGuard } from './manage-user/admin.guard';



import { RecentListComponent } from './recent-list/recent-list.component';
import { RecentlyVisitedComponent } from './recently-visited/recently-visited.component';
import { ReportComponent } from './report/report.component';
import { TrackPatientsComponent } from './track-patients/track-patients.component';



import { ViewCustomerComponentComponent } from './View-Customers-order-page/view-customer-component/view-customer-component.component';

import{VaccinehomeComponent}from './Vaccination/VaccineHomepage/vaccinehome/vaccinehome.component';//RIVINDU VACCINE HOME PAGE
import{VaccineResComponent}from './Vaccination/vaccine-res/vaccine-res.component';//Rivindu vaccine reservation
import { ViewreservationsComponent } from './Vaccination/viewreservations/viewreservations.component';//docapointment
import { DrAppointmentComponent} from './Doctor-appointments/dr-appointment/dr-appointment.component';//rivindu docapointment
import { AppointmenthomepageComponent } from './Doctor-appointments/appointmenthomepage/appointmenthomepage.component';//apointment homepage

//sandali
import { HospitalHomeComponentsComponent } from './Hospital-admin/hospital-home-components/hospital-home-components.component';
import { VacAddComponentComponent } from './Vaccination/vac-add-component/vac-add-component.component';
import { VacDisplayComponentsComponent } from './Vaccination/vac-display-components/vac-display-components.component';
import { DrApAddComponentsComponent } from './Doctor-appointments/dr-ap-add-components/dr-ap-add-components.component';
import { DrApDisplayComponentsComponent } from './Doctor-appointments/dr-ap-display-components/dr-ap-display-components.component';
import { DoctorDisplayComponentsComponent } from './Doctors/doctor-display-components/doctor-display-components.component';
import { DoctorAddComponentsComponent } from './Doctors/doctor-add-components/doctor-add-components.component';
import { ViewappointmentsComponent } from './Doctor-appointments/viewappointments/viewappointments.component';//rivindu doc appointment view
import { AppointmentadminsideComponent } from './Doctor-appointments/appointmentadminside/appointmentadminside.component';//rivindu docappointment admin side
import { ReservationadminsideComponent } from './Vaccination/reservationadminside/reservationadminside.component';//admin side vaccine reservation
import { DoctorReportComponentsComponent } from './Doctors/doctor-report-components/doctor-report-components.component';
import { CardCreateComponent } from './card/card-create/card-create.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CashCreateComponent } from './cash/cash-create/cash-create.component';
import { CashListComponent } from './cash/cash-list/cash-list.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { paymentMethodComponent } from './paymentMethod/paymentMethod.component';

import { labMain } from './Lab/Lab-Main/Lab-Main.component';
import { pcrBookMain } from './Lab/PCR-Book-main/pcr-book-main.component';
import { trackPageComponent } from './Lab/Track-page-main/track-page-main.component'
import { LaboratorianMain } from './Lab/Laboratorian-Main/Laboratorian-Main.component';
import { getPcrMainComponent } from './Lab/get-pcr-main/get-pcr-main.component';



const routes: Routes = [
  {path: '', component: HomePageComponentComponent},
   {path: 'home', component: HomePageComponentComponent},
   {path: 'pharmacyhome', component: PharmacyHomePageComponentComponent},
   {path: 'pharmacyUI', component: PharmacyUIComponentComponent},
   {path: 'pharmacyorder', component: PharmacyOrderComponentComponent},
   {path: 'orderconfirm', component: OrderConfirmComponentComponent},
   {path: 'historytable', component: OrderHistoryComponentComponent},
   {path: 'prescription', component: PrescriptionComponentComponent},
   {path: 'image', component: ImageUploaderComponentComponent},
   {path: 'dashboard', component: PharmacyAdminComponentComponent},
   {path: 'adminadd', component: PharmacyAdminAddComponentComponent},
   {path: 'adminview', component: PharmacyAdminViewComponentComponent},
   {path: 'orderreport', component: OrderReportComponentComponent},
   {path: 'barchart', component: BarchartComponentComponent},
   {path: 'img', component: ImageUploadComponentComponent},

   //muthuni
   {path :'Qreservation',component :ReservationComponent},


   {path: 'site-admin-login', component: SiteAdminLoginComponent},
   {path: 'hospital-admin-signup', component: HospitaAdminSignupComponent},
   {path: 'site-admin-login', component: SiteAdminLoginComponent},
   {path: 'hospital-admin-login', component: HospitalAdminLoginComponent},
   {path: 'user-login', component: UserLoginComponent},
   {path: 'site-admin-page', component: SiteAdminPageComponent },
   {path: 'hospital-admin-contact', component: HospitalAdminContactComponent},
   {path: 'site-admin', component: SiteAdminComponent },
   {path: 'admin-login', component: AdminLoginComponent},

   {path: 'view', component: ViewCustomerComponentComponent},
   {path: 'padmin', component: PadminDashComponentComponent},



   { path : 'track' ,component : TrackPatientsComponent },
  {path: 'patient',component :InfectedListComponent},
  { path : 'create' ,component : InfectedComponent },
  { path : 'edit/:postid' ,component : InfectedComponent },
  {path : 'detail' ,component : RecentlyVisitedComponent},
  {path : 'update/:detailid' ,component : RecentlyVisitedComponent},
  {path : 'recent' ,component : RecentListComponent},
  {path : 'report' ,component : ReportComponent},


    {path:'viewvaccinereservation',component:ViewreservationsComponent},//view vaccine
   {path:'vaccinehome',component:VaccinehomeComponent},// vaccine home page
    {path:'vaccineres',component:VaccineResComponent},// vaccine res component
    { path: 'hospital-admin', component: HospitalHomeComponentsComponent },
  // { path: 'hospital-admin', component: HospitalHomeComponentsComponent, canActivate: [AuthGuardGuard] },
   { path: 'vac-add', component: VacAddComponentComponent },
   { path: 'vac-display', component: VacDisplayComponentsComponent },
   { path: 'vac-edit/:vscheduleId', component: VacAddComponentComponent },
   { path: 'drA-add', component: DrApAddComponentsComponent },
   { path: 'drA-edit/:dAscheduleId', component: DrApAddComponentsComponent },
   { path: 'drA-display', component: DrApDisplayComponentsComponent },
   { path: 'doc-add', component: DoctorAddComponentsComponent },
   { path: 'doc-edit/:doctorsId', component: DoctorAddComponentsComponent },
   { path: 'doc-display', component: DoctorDisplayComponentsComponent },
   {path:'dr-appointment',component:DrAppointmentComponent},//rivindu doctor appointment
   {path:'appointmenthomepage',component:AppointmenthomepageComponent},
   {path:'viewappointments',component:ViewappointmentsComponent},//view appointments
   {path:'appointmentadmin',component:AppointmentadminsideComponent},//admin side reservation
   {path:'reservationadminside',component:ReservationadminsideComponent},
   {path:'doc-repo',component:DoctorReportComponentsComponent},


   //Naveen
   {path:'labMain', component:labMain},
   {path:'trackProgress', component:trackPageComponent},
   {path:'pcrBook', component:pcrBookMain},
   {path:'Laboratorian', component:LaboratorianMain},
   {path:'pcrReport', component:getPcrMainComponent},



   {path : 'card',component : CardCreateComponent},
   {path:'cash',component:CashCreateComponent},
   {path : 'paymentMethod',component : paymentMethodComponent},
   {path : 'cardedit/:cardId',component : CardCreateComponent},
   {path: 'cedit/:cashId',component:CashCreateComponent},
   {path : 'list',component : CardListComponent},
   {path: 'clist',component:CashListComponent},
   {path:'paymentReport',component:PaymentReportComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard,AdminGuard]
})
export class AppRoutingModule { }
