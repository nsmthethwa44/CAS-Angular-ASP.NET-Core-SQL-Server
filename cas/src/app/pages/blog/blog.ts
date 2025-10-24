import { Component } from '@angular/core';
import { InsightNews } from "../../sections/insight-news/insight-news";

@Component({
  selector: 'app-blog',
  imports: [ InsightNews],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

}
