import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(signalRService, spch) {
        this.signalRService = signalRService;
        this.spch = spch;
    }
    selectChangeHandler(event) {
        //update the ui
        this.slectedLng = event.target.value;
    }
    ngOnInit() {
        this.signalRService.startConnection();
        this.signalRService.addTransferChartDataListener();
        this.lngA = this.spch.langArray();
        this.signalRService.notification.subscribe((txt) => {
            this.speak(txt);
        });
        this.homeText = "WELCOME TO ACCOUNT-OWNER APPLICATION";
    }
    speak(txt) {
        this.spch.sayIt(txt, this.slectedLng);
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map