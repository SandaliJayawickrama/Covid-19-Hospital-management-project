import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


import { OrderService } from 'src/app/shared/order.service';



@Component({
  selector: 'app-pharmacy-order-body-component',
  templateUrl: './pharmacy-order-body-component.component.html',
  styleUrls: ['./pharmacy-order-body-component.component.css'],
  providers: [OrderService],

})
export class PharmacyOrderBodyComponentComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public orderService: OrderService, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private router: Router) { }


  getErrorMessage(){
    return this.email.hasError('required') ? 'Enter Valid Email With @ character ' :
      this.email.hasError('pattern') ? 'Not a Valid email. Enter With @ character' :
         '';

  }

  ngOnInit() {
    this.resetForm();

  }

  showToatr() {
    this.toastr.success('Saved Successfully');
  }



  resetForm(form?: NgForm) {
    if (form)
       form.reset();

   this.orderService.selectedOrder = {
        _id: "",
        name: "",
        address: "",
        email: "",
        contact: "",
        disease: "",
        des: "",

    }

}

onSubmit(form : NgForm){
    this.orderService.postOrder(form.value).subscribe((res) => {
      this.resetForm(form);
      this.showToatr();
      this.router.navigate(['/image']);

    });
}



}
