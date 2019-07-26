import { Component, OnInit, ViewChild } from '@angular/core';
import { OudersAddComponent } from '../ouders-add/ouders-add.component';
import { OuderDataService } from '../DataService/OudersDataService'
import { Ouder } from 'src/Models/Ouder'
import { Router } from '@angular/router';
import { OudersUpdateComponent } from '../ouders-update/ouders-update.component';
@Component({
  selector: 'app-ouders',
  templateUrl: './ouders.component.html',
  styleUrls: ['./ouders.component.css']
})
export class OudersComponent implements OnInit {

  ouderlist: Ouder[];
  dataavailbale: Boolean = false;
  tempouder: Ouder

  constructor(private dataservice: OuderDataService, private route: Router) {
  }
  ngOnInit() {
    this.LoadData();
  }
  LoadData() {
    this.dataservice.getOuder().subscribe((tempdate) => {
      this.ouderlist = tempdate;
      console.log(this.ouderlist);
      if (this.ouderlist.length > 0) {
        this.dataavailbale = true;
      }
      else {
        this.dataavailbale = false;
      }
    }
    )
      , err => {
        console.log(err);
      }
  }
  deleteconfirmation(id: number) {

    if (confirm("Are you sure you want to delete this ?")) {
      this.tempouder = new Ouder();
      this.tempouder.id = id;
      this.dataservice.DeleteOuder(this.tempouder).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
  @ViewChild('empadd') addcomponent: OudersAddComponent
  @ViewChild('regForm') editcomponent: OudersUpdateComponent
  loadAddnew() {
    this.addcomponent.objouder.naam = ""
    this.addcomponent.objouder.schoolgaand = false
    this.addcomponent.objouder.id = 0
  }
  loadnewForm(id: number, naam: string, schoolgaand: boolean) {
    this.editcomponent.objouder.naam = naam
    this.editcomponent.objouder.schoolgaand = schoolgaand
    this.editcomponent.objouder.id = id
  }
  RefreshData() {
    this.LoadData();
  }
}  
