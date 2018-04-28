import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

showButton = false;
serverStatus = 'No server is created';
serverCreated = false;
serverName = '';
servers = ['q', 'q'];
  constructor() {
    setTimeout(() => {this.showButton = true; }, 2000 );
    console.log('1');
   }

  ngOnInit() {
    console.log('2');
  }

  onServerAddHandler() {
    this.servers.push('i');
    this.serverCreated = true;
    this.serverStatus = 'server is created';
  }
  onServerNameUpdateHandler(event) {
    this.serverName = event.target.value;
  }

}
