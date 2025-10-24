import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DealsService } from '../../services/deals-service';
import { Deal } from '../../models/deal';
import { InsightNews } from "../../sections/insight-news/insight-news";
import { Reviews } from "../../sections/reviews/reviews";

@Component({
  selector: 'app-cars',
  imports: [RouterLink, CommonModule, InsightNews, Reviews],
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars {
deals: Deal[] = [];

  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {
    this.dealsService.getDeals().subscribe(data => {
      this.deals = data;
    });
  }
}
