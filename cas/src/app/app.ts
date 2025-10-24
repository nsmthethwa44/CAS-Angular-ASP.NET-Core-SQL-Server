import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTop } from "./components/scroll-top/scroll-top";
import { Preloader } from "./components/preloader/preloader";
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollTop, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Car Auction System';
  loading = false;
  isVisible = false

   ngOnInit(): void {
    window.onscroll = () =>{
      if(window.scrollY > 2){
        this.isVisible = true;
      }else{
        this.isVisible = false;
      }
    }
  }

  //   constructor(private router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationStart) {
  //        this.loading = true;
  //       console.log('Loading started'); // debug
  //     }else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
  //       setTimeout(() =>{
  //         this.loading = false;
  //       }, 3000)
  //     }
  //   });
  // }
  
}
