import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { KindDataService } from '../DataService/KindDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Kind } from 'src/Models/Kind';
@Component({
  selector: 'app-kind-update',
  templateUrl: './kind-update.component.html',
  styleUrls: ['./kind-update.component.css']
})
export class KindUpdateComponent implements OnInit {

  constructor(private dataservice: KindDataService, private route: Router) {

  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', { static: false }) cb: ElementRef;
  ngOnInit() {
  }

  @Input() reset: boolean = false;
  @ViewChild('regForm', { static: false }) myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempkind: Kind;
  @Input() objemp: Kind = new Kind();

  EditKind(regForm: NgForm) {

    this.dataservice.EditKind(this.objemp).subscribe(res => {
      alert("Employee updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();

    });
}
}
