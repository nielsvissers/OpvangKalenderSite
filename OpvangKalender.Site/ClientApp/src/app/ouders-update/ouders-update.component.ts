import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { OudersDataService } from '../DataService/OudersDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ouder } from 'src/Models/Ouder';
@Component({
  selector: 'app-ouders-update',
  templateUrl: './ouders-update.component.html',
  styleUrls: ['./ouders-update.component.css']
})
export class OudersUpdateComponent implements OnInit {

  constructor(private dataservice: OudersDataService, private route: Router) {

  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', { static: false }) cb: ElementRef;
  ngOnInit() {
  }

  @Input() reset: boolean = false;
  @ViewChild('regForm', { static: false }) myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempkind: Ouder;
  @Input() objouder: Ouder = new Ouder();

  EditOuder(regForm: NgForm) {

    this.dataservice.EditOuder(this.objouder).subscribe(res => {
      alert("Employee updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();

    });
  }
}
