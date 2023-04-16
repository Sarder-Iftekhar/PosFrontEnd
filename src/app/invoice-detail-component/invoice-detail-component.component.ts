import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InvoiceDetailService } from './invoice-detail.service';

@Component({
  selector: 'app-invoice-detail-component',
  templateUrl: './invoice-detail-component.component.html',
  styleUrls: ['./invoice-detail-component.component.css']
})
export class InvoiceDetailComponentComponent {



  PosArray : any[] = [];
  PosAddArray : any[] = [];
  isResultLoaded = false;
  //isUpdateFormActive = false;

 
  customerId : string = "";
  customerName: string ="";
  itemName: string = ""
  itemQuantity : number = 0
 
 
   currentID = "";
  subscription: any;

  constructor(private http: HttpClient,
             private InvoiceDetailService : InvoiceDetailService
              ) 
  {
   
  }

  ngOnInit(): void { 
    this.getAllPos(); 
  }

  getAllPos(){  
    //this.asyncService.start();
    this.subscription =
    this.InvoiceDetailService.getPos().subscribe(resultData => {
      this.isResultLoaded = true;
        console.log(resultData);
      this.PosArray = resultData ;
      //this.asyncService.finish();
    });
  }




//get data end  


// //post data start

  addArr(){
    let bodyData = {
      
      "itemName" : this.itemName,
      "itemQuantity" : this.itemQuantity,
      "customerId" : this.customerId,
    
    };
    this.PosAddArray.push(bodyData)
    console.log("arr",this.PosAddArray)
  }

  register() {
    //this.asyncService.start();
    let bodyData = {
      "customerId" : this.customerId,
      "customerName" : this.customerName,
      // "invDate" : this.invDate
    
    };
    this.InvoiceDetailService.addPos(bodyData,this.PosAddArray).subscribe(() => {
      alert("Pos Registered Successfully")
      this.getAllPos();
      
    });
  }

// //post data end


// //update start 
//   setUpdate(data: any) 
//   {
//    this.studentName = data.studentName;
//    this.course = data.course;
//    this.currentStudentID = data.id;
//   }

 


//   UpdateRecords() {
//     let bodyData = 
//     {
//       "studentName" : this.studentName,
//       "course" : this.course,
//     };
//     console.log("hello1111111111",bodyData,this.currentStudentID)
//     this.StudentCrudService.updateStudent(this.currentStudentID,bodyData).subscribe((resultData) => {
//       console.log("update test",resultData);
//         alert("Student Registered Updateddd")
//         this.getAllStudent();
  
//     });
//   }



//   //update end
 
  save()
  {
    if(this.currentID == '')
    {
        this.register();
    }
      // else
      // {
      //  this.UpdateRecords();
      // }       

  }


//   setDelete(data:any){
//     this.StudentCrudService.deleteStdent(data).subscribe((resultData) => 
//     {
//            console.log("ggfdgfdfdtrtrsursrts",resultData);
//         alert("Student Deletedddd")
//         this.getAllStudent();
//     }, error => {
//       console.log("Error occured in time of delete.");
//     });
//   };

  //delete end


}
