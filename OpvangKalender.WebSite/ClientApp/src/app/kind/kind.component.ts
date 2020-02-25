import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kind } from 'src/Models/Kind';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './kind.component.html'
})
export class KindComponent {
  public kinderen: Kind[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Kind[]>(baseUrl + 'api/kinderen').subscribe(result => {
      this.kinderen = result;
    }, error => console.error(error));
  }
}



/*import { Component, OnInit, ViewChild } from '@angular/core';
import { KindAddComponent } from '../kind-add/kind-add.component';
import { KindDataService } from '../../DataService/KindDataService'
import { Kind } from 'src/Models/Kind'
import { Router } from '@angular/router';
import { KindUpdateComponent } from '../kind-update/kind-update.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.css']
})
export class KindComponent implements OnInit {

  kindlist: Kind[];
  dataavailbale: Boolean = false;
  tempkind: Kind

  constructor(private dataservce: KindDataService, private route: Router) {
  }
  ngOnInit() {
    this.LoadData();
  }
  LoadData() {
    this.dataservce.getKind().subscribe((tempdate) => {
      this.kindlist = tempdate;
      console.log(this.kindlist);
      if (this.kindlist.length > 0) {
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
      this.tempkind = new Kind();
      this.tempkind.id = id;
      this.dataservce.DeleteKind(this.tempkind).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
  @ViewChild('empadd', { static: false }) addcomponent: KindAddComponent
  @ViewChild('regForm', { static: false }) editcomponent: KindUpdateComponent
  loadAddnew() {
    this.addcomponent.objemp.naam = ""
    this.addcomponent.objemp.schoolgaand = false
    this.addcomponent.objemp.id = 0
  }
  loadnewForm(id: number, naam: string, schoolgaand: boolean) {
    this.editcomponent.objemp.naam = naam
    this.editcomponent.objemp.schoolgaand = schoolgaand
    this.editcomponent.objemp.id = id
  }
  RefreshData() {
    this.LoadData();
  }
}  
*/
