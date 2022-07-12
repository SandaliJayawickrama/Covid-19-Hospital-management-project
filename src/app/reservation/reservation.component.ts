import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReservationService } from '../Shared/reservation.service';
import { Reservation } from '../Shared/reservation.model';

declare var M: any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ReservationService]
})
export class ReservationComponent implements OnInit {

  constructor(public reservationService: ReservationService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshReservationList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.reservationService.selectedReservation = {
      _id: "",
      nic: "",
      name: "",
      city: "",
      country: "",
      resno: 0,
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.reservationService.postReservation(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshReservationList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.reservationService.putReservation(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshReservationList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }


refreshReservationList() {
  this.reservationService.getReservationList().subscribe((res) => {
  this.reservationService.Reservations = res as Reservation[];
  });
}
onEdit(res1 : Reservation) {
  this.reservationService.selectedReservation = res1;
}
onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.reservationService.deleteReservation(_id).subscribe((res) => {
      this.refreshReservationList();
      this.resetForm(form);
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
}
