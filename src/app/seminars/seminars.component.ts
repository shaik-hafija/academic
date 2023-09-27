import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Academic} from '../academic';
import { AcademicService} from '../academic.service';
@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['./seminars.component.css']
})
export class SeminarsComponent implements OnInit{
  ngOnInit(): void {}
  constructor(private service:AcademicService){}
  Subscription:Subscription=new Subscription();
  a:any[]=[];
  show=true;
  m=false;
  e_type:string='seminar';
 
  flower:Academic={
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
  }
  url="https://www.thespruce.com/thmb/0QHDmutjh9OcQ-V4sHuUjRhPWo0=/6720x0/filters:no_upscale():max_bytes(150000):strip_icc()/tiny-flowers-1315816-02-ffd9607c255d482cb14838988fb5093f.jpg";
  Read(){
    this.Subscription=this.service.Read2(this.e_type).subscribe(
      (Data:any)=>{
        if(Data){
          console.log(Data);
          this.a = Data;
          this.show=true;
        }
        else{
          console.log("error");
          
        }
    }
    )
  }
  OnDestroy(): void {
    this.Subscription.unsubscribe();
  }
  more()
  {
this.m=true;
  }
}