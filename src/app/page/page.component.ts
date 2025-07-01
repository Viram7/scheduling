import { Component, OnInit } from '@angular/core';
import { CalendarModule, DatePicker, DatePickerModule, DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormComponent } from '../form/form.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [FormsModule,FormComponent,CommonModule, CalendarModule, DatePickerModule, TimePickerModule, DatePickerModule, DateTimePickerModule, RouterLink, RouterLinkActive, FormComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {

  iscal:boolean = true;
  isform:boolean=!this.iscal;
  ishidetext:boolean = false;
  istime:boolean = true;
  isbutton:boolean = false;
  fulltime:Date = new Date();
  // cal_today_val:Date = new Date();

  cal_value:Date =  new Date();

  tempday =   this.cal_value.getDate();
  tempmonth = this.cal_value.getMonth();
  tempyear =  this.cal_value.getFullYear();

  textdaym = this.fulltime.getDay();
  textmonth = this.fulltime.getUTCMonth();
  textday = this.fulltime.getDate();
  textyear = this.fulltime.getFullYear();


  // date21 = ["2;00","3:00","5:00","7:00","9:00"];
  // date22 = ["7:00","8:00","10:00","11:00","1:00"];
  // datevalue = 22;
  // datecheak = [ ["2;00","3:00","5:00","7:00","9:00"], ["7:00","8:00","10:00","11:00","1:00"] ]

  nov = [["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],["2;00","3:00","5:00","7:00","9:00"],


  ]



  ngOnInit(): void {

    setInterval(() => {
      this.fulltime = new Date();
      this.tempday =   this.cal_value.getDate();

      this.tempmonth = this.cal_value.getMonth();
     this.tempyear =  this.cal_value.getFullYear();
      // console.log(this.cal_value.getDate());
    }, 1);
  }

ofcal(){
this.iscal = !this.iscal;
this.isform=!this.iscal;

window.scrollTo({ top: 0, behavior: 'smooth' });
console.log("hty");
}


showhidetext()
{
  this.ishidetext = !this.ishidetext;
}

showbt()
{
  this.istime = !this.istime;
  this.isbutton = !this.isbutton;
}

}

