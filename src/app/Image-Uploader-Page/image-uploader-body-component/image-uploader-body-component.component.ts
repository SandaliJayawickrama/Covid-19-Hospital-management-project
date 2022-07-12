import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-image-uploader-body-component',
  templateUrl: './image-uploader-body-component.component.html',
  styleUrls: ['./image-uploader-body-component.component.css']
})
export class ImageUploaderBodyComponentComponent implements OnInit {
  imageUrl : string = "/assets/Images/up.gif";
  fileToUpload : File = null;
  title = 'fileUpload';
  images: any;



  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router ) { }

  ngOnInit(){

  }

  showToatrsave() {
    this.toastr.success('Upload to the server Successfully');
  }


  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate(['/orderconfirm']);
    this.showToatrsave();
  }


  handleFileInput(event : Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.fileToUpload = file;

    //Show Image Preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);

  }





}
