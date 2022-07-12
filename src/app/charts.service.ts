import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import{count, map} from 'rxjs/operators';
import { Associates } from './patient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private Associates: Associates[]=[];
  private AssociatesUpdated= new  Subject<Associates[]>();

  constructor(private _http:HttpClient) { }

 public PatientCharts(){
  return this._http.get<{message :string,posts:any}>("http://localhost:3000/posts")
  .pipe(map(result=>result));
}

public associatedetails(){

  this._http.get<{message :string,details:any}>('http://localhost:3000/details')
  .pipe(map((postData)=>{
    return postData.details.map((detail:any)=>{
      return {
        id:detail._id,
        recentName:detail.recentName,
        recentContacts:detail.recentContacts,
        recentPlaces:detail.recentPlaces
    };
    });
  }))

      .subscribe((transformedAssociates)=>{
        this.Associates=transformedAssociates;
        this.AssociatesUpdated.next([...this.Associates]);
      });
    }
    getAssociatesUpdateListener(){
  return this.AssociatesUpdated.asObservable();

    }
}

