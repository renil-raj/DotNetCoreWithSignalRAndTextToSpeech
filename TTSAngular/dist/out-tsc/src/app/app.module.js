import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TokenComponent } from './token/token.component';
import { MenuComponent } from './menu/menu.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            TokenComponent,
            MenuComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            RouterModule.forRoot([
                { path: 'home', component: HomeComponent },
                { path: 'token', component: TokenComponent },
                { path: '', redirectTo: '/home', pathMatch: 'full' }
            ])
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map