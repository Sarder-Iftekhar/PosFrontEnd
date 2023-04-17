import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiModalComponent } from './detai-modal.component';

describe('DetaiModalComponent', () => {
  let component: DetaiModalComponent;
  let fixture: ComponentFixture<DetaiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaiModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
