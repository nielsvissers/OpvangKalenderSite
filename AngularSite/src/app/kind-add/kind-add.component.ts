import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kind } from 'src/Models/Kind';
import { Router } from '@angular/router';
import { KindDataService } from '../DataService/KindDataService'
@Component({
  selector: 'app-kind-add',
  templateUrl: './kind-add.component.html',
  styleUrls: ['./kind-add.component.css']
})
export class KindAddComponent implements OnInit {

  @Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
objtempemp: Kind;
@Input() objemp: Kind = new Kind();;
@ViewChild('closeBtn') cb: ElementRef;
constructor(private dataservice: KindDataService, private route: Router) {

}

ngOnInit() {
  // this.ResetValues();
}

ResetValues(){

}

Register(regForm: NgForm){

  this.objtempemp = new Kind();
  this.objtempemp.email = regForm.value.email;
  this.objtempemp.firstname = regForm.value.firstname;
  this.objtempemp.lastname = regForm.value.lastname;
  this.objtempemp.gender = regForm.value.gender;

  this.dataservice.AddKind(this.objtempemp).subscribe(res => {
    alert("Employee Added successfully");
    this.TakeHome();
  }
)

}
TakeHome(){
  this.nameEvent.emit("ccc");
  this.cb.nativeElement.click();
  this.route.navigateByUrl('');
}

}
