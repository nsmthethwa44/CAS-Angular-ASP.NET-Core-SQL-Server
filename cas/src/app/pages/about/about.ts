import { Component } from '@angular/core';
import { Process } from "../../sections/process/process";
import { Reviews } from "../../sections/reviews/reviews";
import { InsightNews } from "../../sections/insight-news/insight-news";

@Component({
  selector: 'app-about',
  imports: [Process, Reviews, InsightNews],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
