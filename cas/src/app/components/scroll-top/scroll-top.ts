import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.scss'
})
export class ScrollTop {
 @Input() isVisible: boolean = false;

 scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'})
 }
}
