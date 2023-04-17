import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceDetailService } from '../invoice-detail-component/invoice-detail.service';


@Component({
  selector: 'app-invoice-detail-view',
  templateUrl: './invoice-detail-view.component.html',
  styleUrls: ['./invoice-detail-view.component.css']
})
export class InvoiceDetailViewComponent {

  PosArray : any[] = [];
  isResultLoaded = false;
  subscription: any;

  constructor(private http: HttpClient,
    private InvoiceDetailService : InvoiceDetailService,
    private router: Router,
    private route: ActivatedRoute
     ) 
{

}

  ngOnInit(): void { 
    this.getAllPos(); 
  }

  getAllPos(){  
    this.subscription =
    this.InvoiceDetailService.getPos().subscribe(resultData => {
      this.isResultLoaded = true;
        console.log('get data',resultData);
      this.PosArray = resultData ;
    });
  }


 
  navigateModal(item:any) {
    this.router.navigateByUrl('/modal',{ state: { id: item.customerId}});
 }



}
