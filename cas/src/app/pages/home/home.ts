import { Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { Categories } from "../../sections/categories/categories";
import { WhyChooseUs } from "../../sections/why-choose-us/why-choose-us";
import { Cta } from "../../sections/cta/cta";
import { Popular } from "../../sections/popular/popular";
import { Process } from "../../sections/process/process";
import { UsedCars } from "../../sections/used-cars/used-cars";
import { Reviews } from "../../sections/reviews/reviews";
import { News } from "../../sections/news/news";

@Component({
  selector: 'app-home',
  imports: [Hero, Categories, WhyChooseUs, Cta, Popular, Process, UsedCars, Reviews, News],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
