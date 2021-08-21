import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarscroll: boolean = false;
  titleblack: boolean = false;
  logo1hide: boolean = false;
  logo2show: boolean = false;

  @HostListener('window:scroll', ['$event']) 
  onscroll() {
    if (window.scrollY > 100) {
      this.navbarscroll = true;
      this.titleblack = true;
      this.logo1hide = true;
      this.logo2show = true;
    }

    else {
      this.navbarscroll = false;
      this.titleblack = false;
      this.logo1hide = false;
      this.logo2show = false;
    }
  }
}
