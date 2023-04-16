import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailComponentComponent } from './invoice-detail-component.component';

describe('InvoiceDetailComponentComponent', () => {
  let component: InvoiceDetailComponentComponent;
  let fixture: ComponentFixture<InvoiceDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
