import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router'
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-main-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss'
})
export class MainHeader {
 isNavBarOpen = false;
 isScrolled = false;

 @HostListener('window:scroll', [])
  onWindowScroll(){
    this.isScrolled = window.scrollY > 2;
  }

  toggleNavBar() {
    this.isNavBarOpen = !this.isNavBarOpen;
  }

  closeNavbar() {
    this.isNavBarOpen = false;
  }


}
