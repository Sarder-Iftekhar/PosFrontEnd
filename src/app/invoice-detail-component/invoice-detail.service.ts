import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  constructor(private http: HttpClient) { }

  geturl  ='https://localhost:7259/api/InvoiceDetail/GetPos'
  public getPos(): Observable<any> {
    return this.http.get(this.geturl);
  }
  
   addUrl = 'https://localhost:7259/api/InvoiceDetail/AddPos'
  public addPos(formData:any, Arr:any) {

    console.log("hello post",formData, Arr)

    var postData = {
     formData, 
      Arr
  }
    return this.http.post(this.addUrl, postData);
   }

// deleteUrl = ''
//   public deletePos(element:any) {
//     return this.http.delete(this.deleteUrl+ element.id);
//   }

//   updateURL = ''
//   public updatePos(currentStudentID:any,element:any) 
//   {
//   console.log('test data',element);   
//   return this.http.put(this.updateURL+ currentStudentID,element)
//   };



}
