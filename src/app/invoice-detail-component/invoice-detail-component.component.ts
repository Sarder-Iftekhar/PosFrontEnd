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
    //this.getAllPos(); 
  }

  // getAllPos(){  
  //   this.subscription =
  //   this.InvoiceDetailService.getPos().subscribe(resultData => {
  //     this.isResultLoaded = true;
  //       console.log(resultData);
  //     this.PosArray = resultData ;
  //   });
  // }


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
  
    let bodyData = {
      "customerId" : this.customerId,
      "customerName" : this.customerName,
      // "invDate" : this.invDate
    
    };
    this.InvoiceDetailService.addPos(bodyData,this.PosAddArray).subscribe(() => {
      alert("Pos Registered Successfully")
      //this.getAllPos();
      
    });
  }


 
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




}
