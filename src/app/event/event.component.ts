import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Academic,
  UniqueConstraintError,
} from '../academic';

import { Subscription } from 'rxjs';
import { AcademicService } from '../academic.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {

  constructor(private Service: AcademicService,private http:HttpClient) { }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  selectedFile: File | null = null;
  User: Academic = {
    e_name: '',
    e_type: '',
    e_sdate:new Date() ,
    e_edate:new Date(),
    e_poster: '',
    e_fee: 0,
    e_contact: 0,
    e_country: '',
    e_state: '',
    e_city: '',
    e_address: '',
    e_more: '',
    e_id: 0


  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert(Form: NgForm) {
    console.log(Form.value);
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Insert(Form.value).subscribe(
      {
        next: (Data: InsertedSuccess | UniqueConstraintError) => {
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.e_id} alredy Exists`;
          } else {
            this.SuccessMsg = `${this.User.e_name} Inserted Succesfully`;
            console.log(this.SuccessMsg);

          }
          Form.reset();
        }
      }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}


