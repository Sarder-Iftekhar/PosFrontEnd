import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceDetailService } from '../invoice-detail-component/invoice-detail.service';

@Component({
  selector: 'app-detai-modal',
  templateUrl: './detai-modal.component.html',
  styleUrls: ['./detai-modal.component.css']
})
export class DetaiModalComponent {

  arrayDet : any[] = [];
  isResultLoaded = false;
  subscription: any;
  CustomerId : string = ''

  constructor(private http: HttpClient,
    private InvoiceDetailService : InvoiceDetailService,
    private router: Router,
    private route: ActivatedRoute
     ) 
{

}

  ngOnInit(): void { 
    this.CustomerId = history.state.id;
    console.log(this.CustomerId)
    this.getAllPos(); 
  }

  getAllPos(){  
    this.subscription =
    this.InvoiceDetailService.getDetById(this.CustomerId).subscribe(resultData => {
      this.isResultLoaded = true;
        console.log('hbjasdbh',resultData);
        this.arrayDet = resultData ;
    });
  }




}
