import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { EventEmitter } from '@angular/core';
let SignalRService = class SignalRService {
    constructor() {
        this.notification = new EventEmitter();
        this.startConnection = () => {
            this.hubConnection = new signalR.HubConnectionBuilder()
                .withUrl('https://localhost:5001/token', {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
                .build();
            this.hubConnection
                .start()
                .then(() => console.log('Connection started'))
                .catch(err => console.log('Error while starting connection: ' + err));
        };
        this.addTransferChartDataListener = () => {
            this.hubConnection.on('transferchartdata', (data) => {
                this.notification.emit(data);
            });
        };
    }
};
SignalRService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], SignalRService);
export { SignalRService };
//# sourceMappingURL=signal-r.service.js.map