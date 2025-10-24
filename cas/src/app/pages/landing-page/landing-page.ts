import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from "../../components/main-header/main-header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [RouterOutlet, MainHeader, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}
