import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ouder } from 'src/Models/Ouder';
import { Router } from '@angular/router';
import { OuderDataService } from '../DataService/OudersDataService'
@Component({
  selector: 'app-ouder-add',
  templateUrl: './ouders-add.component.html',
  styleUrls: ['./ouders-add.component.css']
})
export class OudersAddComponent implements OnInit {

  @Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempouder: Ouder;
  @Input() objouder: Ouder = new Ouder();;
  @ViewChild('closeBtn') cb: ElementRef;
  constructor(private dataservice: OuderDataService, private route: Router) {

  }

  ngOnInit() {
    // this.ResetValues();
  }

  ResetValues() {

  }

  Register(regForm: NgForm) {

    this.objtempouder = new Ouder();
    this.objtempouder.naam = regForm.value.naam;
    this.objtempouder.schoolgaand = regForm.value.schoolgaand;

    this.dataservice.AddOuder(this.objtempouder).subscribe(res => {
      this.TakeHome();
    }
    )

  }
  TakeHome() {
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    //this.route.navigateByUrl('');
  }

}
