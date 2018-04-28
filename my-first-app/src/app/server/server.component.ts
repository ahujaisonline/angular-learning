import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {

    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
    constructor() {
      console.log('cons');
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor () {
      console.log('yo');
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
