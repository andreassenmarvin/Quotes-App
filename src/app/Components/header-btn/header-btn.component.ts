import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-btn',
  templateUrl: './header-btn.component.html',
  styleUrls: ['./header-btn.component.css']
})
export class HeaderBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  btnscroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (window.scrollY > 600) {
      this.btnscroll = true;
    }


    else {
      this.btnscroll = false;
    }
  }
}
