import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TokenComponent = class TokenComponent {
    constructor(http) {
        this.http = http;
        this.startHttpRequest = (val) => {
            this.http.get('https://localhost:5001/api/TTSSupport?' + val)
                .subscribe(res => {
                console.log(res);
            });
        };
    }
    ngOnInit() {
        //this.startHttpRequest();
    }
};
TokenComponent = tslib_1.__decorate([
    Component({
        selector: 'app-token',
        templateUrl: './token.component.html',
        styleUrls: ['./token.component.css']
    })
], TokenComponent);
export { TokenComponent };
//# sourceMappingURL=token.component.js.map