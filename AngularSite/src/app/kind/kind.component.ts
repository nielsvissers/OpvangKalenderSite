import { Component, OnInit, ViewChild } from '@angular/core';
import { KindAddComponent } from '../kind-add/kind-add.component';
import { KindDataService } from '../DataService/KindDataService'
import { Kind } from 'src/Models/Kind'
import { Router } from '@angular/router';
import { KindUpdateComponent } from '../kind-update/kind-update.component';
@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.css']
})
export class KindComponent implements OnInit {

  emplist: Kind[];
  dataavailbale: Boolean = false;
  tempemp: Kind

  constructor(private dataservce: KindDataService, private route: Router) {
  }
  ngOnInit() {
    this.LoadData();
  }
  LoadData() {
    this.dataservce.getKind().subscribe((tempdate) => {
      this.emplist = tempdate;
      console.log(this.emplist);
      if (this.emplist.length > 0) {
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
  deleteconfirmation(id: string) {

    if (confirm("Are you sure you want to delete this ?")) {
      this.tempemp = new Kind();
      this.tempemp.id = id;
      this.dataservce.DeleteKind(this.tempemp).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
  @ViewChild('empadd') addcomponent: KindAddComponent
  @ViewChild('regForm') editcomponent: KindUpdateComponent
  loadAddnew() {
    this.addcomponent.objemp.email = ""
    this.addcomponent.objemp.firstname = ""
    this.addcomponent.objemp.lastname = ""
    this.addcomponent.objemp.id = ""
    this.addcomponent.objemp.gender = 0
  }
  loadnewForm(id: string, email: string, firstname: string, lastname: string, gender: number) {
    console.log(gender);
    this.editcomponent.objemp.email = email
    this.editcomponent.objemp.firstname = firstname
    this.editcomponent.objemp.lastname = lastname
    this.editcomponent.objemp.id = id
    this.editcomponent.objemp.gender = gender
  }
  RefreshData() {
    this.LoadData();
  }
}  
