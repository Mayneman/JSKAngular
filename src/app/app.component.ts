import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reverb-JSK';
  columnDefs = ['hz','RT','PF'];
  dataSource = {
    100: {RT: "1.23", PF: "1"},
    125: {RT: "1.3", PF: "0"},
    200: {RT: "13", PF: "0"},
    250: {RT: "13", PF: "0"},
    315: {RT: "13", PF: "0"},
    400: {RT: "13", PF: "0"},
    500: {RT: "13", PF: "0"},
    630: {RT: "13", PF: "0"},
    800: {RT: "13", PF: "0"},
    1000: {RT: "13", PF: "0"},
    1250: {RT: "13", PF: "0"},
    1600: {RT: "13", PF: "0"},
    2000: {RT: "13", PF: "0"},
    2500: {RT: "13", PF: "0"},
    3150: {RT: "13", PF: "0"},
    4000: {RT: "13", PF: "0"},
    5000: {RT: "13", PF: "0"},
  };
  logs = "UI Initialized";

  test(){
    console.log('YO');
  }

  add_message(message){
    this.logs = message + "\n" + this.logs
  }

  trigger_measurements(){

  }

}
