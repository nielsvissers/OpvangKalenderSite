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
objtempkind: Kind;
@Input() objemp: Kind = new Kind();;
  @ViewChild('closeBtn', { static: false }) cb: ElementRef;
constructor(private dataservice: KindDataService, private route: Router) {

}

ngOnInit() {
  // this.ResetValues();
}

ResetValues(){

}

Register(regForm: NgForm){

  this.objtempkind = new Kind();
  this.objtempkind.naam = regForm.value.naam;
  this.objtempkind.schoolgaand = regForm.value.schoolgaand;

  this.dataservice.AddKind(this.objtempkind).subscribe(res => {
    this.TakeHome();
  }
)

}
TakeHome(){
  this.nameEvent.emit("ccc");
  this.cb.nativeElement.click();
  //this.route.navigateByUrl('');
}

}
