"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavigationBarComponent = void 0;
var core_1 = require("@angular/core");
var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
        this.navbarscroll = false;
        this.titleblack = false;
        this.logo1hide = false;
        this.logo2show = false;
        this.searchscroll = false;
        this.searchblackscroll = false;
        this.searchclick = false;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent.prototype.onscroll = function () {
        if (window.scrollY > 100) {
            this.navbarscroll = true;
            this.titleblack = true;
            this.logo1hide = true;
            this.logo2show = true;
            this.searchscroll = true;
            this.searchblackscroll = true;
        }
        else {
            this.navbarscroll = false;
            this.titleblack = false;
            this.logo1hide = false;
            this.logo2show = false;
            this.searchscroll = false;
            this.searchblackscroll = false;
        }
    };
    NavigationBarComponent.prototype.searchInput = function () {
        this.searchclick = true;
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event'])
    ], NavigationBarComponent.prototype, "onscroll");
    NavigationBarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navigation-bar.component.html',
            styleUrls: ['./navigation-bar.component.css']
        })
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
exports.NavigationBarComponent = NavigationBarComponent;
