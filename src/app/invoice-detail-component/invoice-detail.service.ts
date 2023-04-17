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
//https://localhost:7259/api/InvoiceDetail/id?id=001
   getUrlDet = 'https://localhost:7259/api/InvoiceDetail/GetById/'

   public getDetById(id:string): Observable<any> {
    console.log("id???",id)
    return this.http.get(this.getUrlDet+ id);
  }



//   [HttpDelete]
//   [Route("DeleteStudent/{id}")]


// deleteUrl = 'https://localhost:7073/api/Student/DeleteStudent/'
// public deleteStdent(element:any) {
//   return this.http.delete(this.deleteUrl+ element.id);
// }




  // updateURL = 'https://localhost:7073/api/Student/UpdateStudent/'
  // public updateStudent(currentStudentID:any,element:any) 
  // {
  // console.log('test data',element);   
  // return this.http.put(this.updateURL+ currentStudentID,element)
  // };

  




}
